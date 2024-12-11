const express = require("express");


const jobsController = require("../controllers/jobController");

const { VerifyToken } = require("../middlewares/VerifyToken");


const router = express.Router();

router.post("/create-job", VerifyToken, jobsController.CreateJob);
router.get("/all-jobs", VerifyToken, jobsController.GetAllJobs);
router.get("/single-job/:pid", VerifyToken, jobsController.GetJobById);






module.exports = router;
