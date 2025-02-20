const express = require("express");
const { VerifyToken } = require("../middlewares/verifyToken");


const companysController = require("../controllers/companyController");
const { SingleUpload } = require("../middlewares/multer");


const router = express.Router();


router.post("/create-company", VerifyToken, companysController.RegisterCompany);
router.get("/get-all-company", VerifyToken, companysController.GetAllCompany);
router.get("/get-company-by-id/:pid", VerifyToken, companysController.GetCompanyById); // pid= parameter id 
router.put("/update-company/:pid", VerifyToken, SingleUpload, companysController.UpdateCompany); // pid= parameter id 




module.exports = router;
