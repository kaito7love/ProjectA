import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";

let router = express.Router();

let initWebRoutes = (app) => {
    //api backend
    router.get("/", homeController.displayGetCRUD);

    router.get("/create-crud", homeController.getCRUD);
    router.post("/post-crud", homeController.postCRUD);
    router.get("/get-crud", homeController.displayGetCRUD);
    router.get("/edit-crud", homeController.getEditCRUD);

    router.get("/delete-crud", homeController.getDeleteCRUD);
    router.post("/put-crud", homeController.putCRUD);

    //api frontend
    router.post("/api/login", userController.handleLogin);
    router.get("/api/get-users", userController.handleGetAllUser)
    router.post("/api/create-user", userController.handleCreateUser)
    router.put("/api/edit-user", userController.handleEditUser)
    router.delete("/api/delete-user", userController.handleDeleteUser)

    return app.use("/", router);
};

module.exports = initWebRoutes;
