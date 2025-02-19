import bcrypt from 'bcryptjs';
import pool from '../database/db.js';

const register = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Kiểm tra dữ liệu gửi lên có hợp lệ không
    if (!username || !password) {
      return res.status(400).json({ message: "Vui lòng nhập đầy đủ thông tin!" });
    }

    // Kiểm tra username đã tồn tại chưa
    const [existingUser] = await pool.query("SELECT * FROM users WHERE username = ?", [username]);
    if (existingUser.length > 0) {
      return res.status(400).json({ message: "Tên đăng nhập đã tồn tại!" });
    }

    // Hash mật khẩu
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Lưu user vào database
    const [result] = await pool.query("INSERT INTO users (username, password) VALUES (?, ?)", [username, hashedPassword]);

    console.log("User created:", result); // Debug log

    res.status(201).json({ message: "Đăng ký thành công, vui lòng đăng nhập!" });
  } catch (error) {
    console.error("Lỗi server:", error); // Log lỗi chi tiết
    res.status(500).json({ message: "Lỗi server", error });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Kiểm tra username có tồn tại không
    const [user] = await pool.query("SELECT * FROM users WHERE username = ?", [username]);
    if (user.length === 0) {
      return res.render("login.ejs", { errorMessage: "Tên đăng nhập không tồn tại!" });
    }

    // Kiểm tra mật khẩu
    const validPassword = await bcrypt.compare(password, user[0].password);
    if (!validPassword) {
      return res.render("login.ejs", { errorMessage: "Mật khẩu không chính xác!" });
    }

    // Chuyển hướng đến trang chủ sau khi đăng nhập thành công
    res.redirect("/love");
  } catch (error) {
    console.error(error);
    res.render("login.ejs", { errorMessage: "Có lỗi xảy ra, vui lòng thử lại!" });
  }
};

export default { register, login };
