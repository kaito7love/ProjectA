import express from "express";
import userController from "../controllers/userController";
import doctorController from "../controllers/doctorController"

let router = express.Router();

let initWebRoutes = (app) => {

    //api frontend
    router.post("/api/login", userController.handleLogin);
    router.get("/api/get-users", userController.handleGetAllUser)
    router.post("/api/create-user", userController.handleCreateUser)
    router.put("/api/edit-user", userController.handleEditUser)
    router.delete("/api/delete-user", userController.handleDeleteUser)

    router.get("/api/allcode", userController.getAllCode);
    
    router.get("/api/doctor-home", doctorController.getTopDoctor);

    return app.use("/", router);
};

module.exports = initWebRoutes;
