import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import connectDB from "./config/connectDB";

require("dotenv").config();

const app = express();
// const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

connectDB();

let port = process.env.port || 6969;
// port undefine port = 6969

app.listen(port, () => {
    //call back
    console.log(`Server is running on http://localhost:${port}`);
});
