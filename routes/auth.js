const express = require("express");
const UserController = require("../controllers/auth");
const router = express.Router();

router.get("/", UserController.fetchAllStudents);
router.get("/:id", UserController.fetchStudent);
router.post("/", UserController.createUser);
router.put("/:id", UserController.updateStudent);

router.post("/login", UserController.login);

module.exports = router;
