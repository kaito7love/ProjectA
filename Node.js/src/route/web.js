import express from "express";
import userController from "../controllers/userController";
import doctorController from "../controllers/doctorController"
import patientController from "../controllers/patientController"
import specialtyController from "../controllers/specialtyController"

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
    router.get("/api/get-all-doctors", doctorController.getAllDoctor);
    router.post("/api/post-info-doctor", doctorController.postInfoDoctor);
    router.get("/api/get-detail-doctors", doctorController.getDetailDoctorById);
    router.post("/api/bulk-create-schedule", doctorController.bulkCreateSchedule);
    router.get("/api/get-schedule-doctor", doctorController.getScheduleByDate);
    router.get("/api/get-doctor-extra-info", doctorController.getExtraInfoDoctorById);
    router.get("/api/get-profile-doctors", doctorController.getProfileDoctorById);
    router.get("/api/get-list-patient-for-doctors", doctorController.getListPatientForDoctor);


    router.post("/api/patient-book-appointment", patientController.postBookingAppointment);
    router.post("/api/verify-book-appointment", patientController.postVerifyBookingAppointment);


    router.post("/api/post-specialty-description", specialtyController.postSpecialtyDescription);
    router.get("/api/get-specialty", specialtyController.getAllSpecialty);

    return app.use("/", router);
};

module.exports = initWebRoutes;
