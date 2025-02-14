import express from "express";
import homeController from "../controllers/homeController.js";

const router = express.Router();

export const initWebRoutes = (app) => {
    // Khi truy cập `/`, tự động chuyển hướng đến `/login`
    router.get("/", (req, res) => {
        res.redirect("/login");
    });

    // Trang đăng nhập
    router.get("/login", homeController.getLoginPage);

    // Trang chủ (nếu cần sau khi đăng nhập)
    router.get("/home", homeController.getHomePage);

    return app.use("/", router);
};

export default initWebRoutes;
