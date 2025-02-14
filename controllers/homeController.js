const getHomePage = (req, res) => {
  res.render("home"); // Hiển thị trang home.ejs
};

const getLoginPage = (req, res) => {
  res.render("login"); // Hiển thị trang login.ejs
};

export default {
  getHomePage,
  getLoginPage,
};
