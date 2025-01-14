const express = require("express")

//const userControllers = require("../controllers/UserController");

const userControllers = require("../controllers/userController");
const { VerifyToken } = require("../middlewares/VerifyToken");
const { SingleUpload } = require("../middlewares/multer");

const router = express.Router();


router.post("/registration", SingleUpload, userControllers.Registration);
router.post("/login", userControllers.Login);
router.put("/update-profile/:pid", VerifyToken, userControllers.UpdateProfile);
router.get("/logout", userControllers.LogOut)





module.exports = router;