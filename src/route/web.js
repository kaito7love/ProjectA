import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
    app.get("/",homeController.getHomePage);

    app.get('/about', homeController.getAboutPage);
    return app.use("/", router);
};

module.exports = initWebRoutes;
