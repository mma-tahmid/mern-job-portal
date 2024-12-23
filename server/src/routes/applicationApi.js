const express = require("express")


const applicationControllers = require("../controllers/applicationController");
const { VerifyToken } = require("../middlewares/VerifyToken");

const router = express.Router();


router.get("/apply-job/:pid", VerifyToken, applicationControllers.ApplyJob);
router.get("/get-all-applied-jobs", VerifyToken, applicationControllers.GetAllAppliedJobs);
//router.get("/get-all-applicants/:pid", VerifyToken, applicationControllers.GetApplicants);
router.get("/:pid/get-all-applicants", VerifyToken, applicationControllers.GetApplicants);
router.put("/status/:pid", VerifyToken, applicationControllers.UpdateStatus);






module.exports = router;