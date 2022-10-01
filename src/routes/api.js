const express = require('express');
const UsersController = require("../controller/UsersController")

const router = express.Router();

router.post("/registration", UsersController.registration)
router.post("/profileUpdate", UsersController.profileUpdate)

module.exports = router;