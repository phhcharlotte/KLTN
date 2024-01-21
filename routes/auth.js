const express = require("express");
const UserController = require("../controllers/auth");
const router = express.Router();

// @route     GET /api/v1/students
// @desc      Get all students
// @access    admin
router.get("/", UserController.fetchAllStudents);

// @route     GET /api/v1/students/:id
// @desc      Get a student by id
// @access    admin
router.get("/:id", UserController.fetchStudent);

// @route     POST /api/v1/students
// @desc      Create new student
// @access    Public
router.post("/", UserController.createStudent);

// @route     PUT /api/v1/students
// @desc      Update a student by id
// @access    Public
router.put("/:id", UserController.updateStudent);

// @route     DELETE /api/v1/students
// @desc      Delete a student by id
// @access    Public
router.delete("/:id", UserController.deleteStudent);

router.post("/login", UserController.login);

module.exports = router;
