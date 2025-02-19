document.getElementById("registerLink").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("loginForm").style.display = "none"; // Ẩn form đăng nhập
    document.getElementById("registerForm").style.display = "block"; // Hiện form đăng ký
});

document.getElementById("cancelRegister").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("registerForm").style.display = "none"; // Ẩn form đăng ký
    document.getElementById("loginForm").style.display = "block"; // Hiện lại form đăng nhập
});

document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("registerFormElement");
    if (registerForm) {
        registerForm.addEventListener("submit", async function (event) {
            event.preventDefault(); // Ngăn form load lại trang

            const username = document.getElementById("register-username")?.value;
            const password = document.getElementById("register-password")?.value;
            const passwordRepeat = document.getElementById("register-password-repeat")?.value;

            // Kiểm tra xem input có bị null không
            if (!username || !password || !passwordRepeat) {
                alert("Vui lòng điền đầy đủ thông tin.");
                return;
            }

            if (password !== passwordRepeat) {
                alert("Mật khẩu nhập lại không khớp.");
                return;
            }

            try {
                const response = await fetch("http://localhost:8080/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ username, password }),
                });

                const data = await response.json();
                if (response.ok) {
                    alert(data.message);
                    window.location.href = "/login"; // Chuyển hướng đến trang đăng nhập
                } else {
                    alert(data.message);
                }
            } catch (error) {
                console.error("Lỗi kết nối server:", error);
                alert("Có lỗi xảy ra, vui lòng thử lại.");
            }
        });
    }
});
