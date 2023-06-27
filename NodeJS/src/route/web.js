import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
import doctorControllers from "../controllers/doctorControllers";
let router = express.Router();
let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/crud", homeController.getCRUD);

  router.post("/post-crud", homeController.getPost);

  router.get("/get-crud", homeController.displayGetCRUD);

  router.get("/edit-crud", homeController.getEditCRUD);

  router.post("/put-crud", homeController.putCRUD);

  router.get("/delete-crud", homeController.deleteCRUD);

  router.post("/api/login", userController.handleLogin);

  router.get("/api/get-all-users", userController.getAllUsers);

  router.post("/api/create-new-user", userController.handleCreateNewUser);

  router.delete("/api/delete-user", userController.handleDeleteUser);

  router.put("/api/edit-user", userController.handleEditUser);

  router.get("/api/allCode", userController.getAllCode);

  router.get("/api/top-doctor-home", doctorControllers.getTopDoctorHome);

  router.get("/api/get-all-doctors", doctorControllers.getAllDoctors);

  router.post("/api/save-info-doctor", doctorControllers.postInforDoctor);

  router.get(
    "/api/get-detai-doctor-by-id",
    doctorControllers.getDetailDoctorById
  );

  router.get(
    "/api/get-content-markdown-doctor",
    doctorControllers.getContentMarkdown
  );

  router.post(
    "/api/bulk-create-schedule",
    doctorControllers.bulkCreateSchedule
  );
  router.get(
    "/api/get-schedule-doctor-by-date",
    doctorControllers.getScheduleByDate
  );

  return app.use("/", router);
};
module.exports = initWebRoutes;
