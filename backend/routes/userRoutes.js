const express = require("express");
const router = express.Router();

//Controller
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

// auth routes
router.route("/signup").post(authController.signup);
router.route("/login").post(authController.login);

//create user
router.route("/").post(userController.createUser);
//get user
router.route("/:id").get(userController.getUser);

module.exports = router;