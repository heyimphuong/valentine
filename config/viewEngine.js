import express from "express";
import path from 'path';
import { fileURLToPath } from 'url'; // Import thêm module để xử lý __dirname

// Tạo __dirname thay thế
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const configViewEngine = (app) => {
  // Đặt thư mục chứa các file tĩnh
  app.use(express.static(path.resolve(__dirname, "../public")));

  // Đặt view engine là EJS
  app.set("view engine", "ejs");

  // Đặt thư mục chứa views
  app.set("views", path.resolve(__dirname, "../views")); // Điều chỉnh để dùng thư mục views đúng với ESM
};

export default configViewEngine;
