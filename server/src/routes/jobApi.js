const express = require("express");


const jobsController = require("../controllers/jobController");

const { VerifyToken } = require("../middlewares/verifyToken");


const router = express.Router();

router.post("/create-job", VerifyToken, jobsController.CreateJob);
router.get("/all-jobs", VerifyToken, jobsController.GetAllJobs);
router.get("/student-job/:pid", VerifyToken, jobsController.GetJobById);
router.get("/get-admin-jobs", VerifyToken, jobsController.getAdminJobs);






module.exports = router;
