import express from "express";
import homeController from "../controllers/HomeController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/",homeController.getHomePage);

    router.get('/about', homeController.getAboutPage);
    return app.use("/", router);
};

module.exports = initWebRoutes;
