import express from "express";
import 'express-async-errors';
import viewEngine from "./config/viewEngine.js";
import initWebRouter from "./routes/web.js";
import bodyParser from "body-parser";

const app = express();

//config view engine
viewEngine(app);

//parse request to json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//init web routes
initWebRouter(app);


const port = 8080;

app.use((_req, res) => {
  res.status(404).json({ error: true })
})

app.use((error, _req, res) => {
  console.error(error)
  res.status(500).json({ error: true })
})

app.listen(port, () => {
  console.log("Server dang chay o cong: " + port);
});
