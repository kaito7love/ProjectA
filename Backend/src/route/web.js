import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", homeController.displayGetCRUD);

    router.get("/create-crud", homeController.getCRUD);
    router.post("/post-crud", homeController.postCRUD);
    router.get("/get-crud", homeController.displayGetCRUD);
    router.get("/edit-crud", homeController.getEditCRUD);

    router.get("/delete-crud", homeController.getDeleteCRUD);
    router.post("/put-crud", homeController.putCRUD);

    return app.use("/", router);
};

module.exports = initWebRoutes;
