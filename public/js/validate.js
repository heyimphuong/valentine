document.querySelector(".form-submit").addEventListener("click", function(event) {
  event.preventDefault(); // Ngăn chặn reload trang

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const button = document.querySelector(".form-submit");

  // Hiệu ứng loading
  button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang xử lý...';
  button.disabled = true;

  setTimeout(() => {
      if (username === "HoPhuong" && password === "31122003") {
          window.location.href = "love"; // Chuyển hướng đến trang chủ
          button.innerHTML = "Sign up"; // Trả lại trạng thái ban đầu
          button.disabled = false;
      } else {
          alert("Sai tài khoản hoặc mật khẩu!");
          button.innerHTML = "Sign up"; // Trả lại trạng thái ban đầu
          button.disabled = false;
      }
  }, 1000); 
});