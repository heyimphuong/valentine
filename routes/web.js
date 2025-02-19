import express from "express";
import homeController from "../controllers/homeController.js";
import authController from "../controllers/authController.js";

const router = express.Router();

export const initWebRoutes = (app) => {
    // Khi truy cập `/`, tự động chuyển hướng đến `/login`
    router.get("/", (req, res) => {
        res.redirect("/login");
    });

    // Hiển thị trang đăng nhập
    router.get("/login", homeController.getLoginPage);

    // Xử lý đăng nhập
    router.post("/login", authController.login);

    // Hiển thị trang đăng ký
    router.get("/register", homeController.getRegisterPage);

    // Xử lý đăng ký tài khoản
    router.post("/register", authController.register);

    // Trang chủ sau khi đăng nhập thành công
    router.get("/home", homeController.getHomePage);

    // Trang love (nếu cần)
    router.get("/love", homeController.getLovePage);

    return app.use("/", router);
};

export default initWebRoutes;
