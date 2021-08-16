const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller")

//get all the users
router.get("/users", userController.getAllUsers)

//get a single user
router.get("/users/:id", userController.findById)

//add users
router.post("/users", userController.addUser)

//delete a users
router.delete("/users/:id", userController.deleteUser)

//update
router.put("/users/:id", userController.updateUser)

module.exports = router;