const express = require('express');
const UsersController = require("../controller/UsersController");
const AuthVerifyMiddleware = require('../middleware/AuthVerifyMiddleware');


const router = express.Router();

router.post("/registration", UsersController.registration);
router.post("/login", UsersController.login);
router.post("/profileUpdate",AuthVerifyMiddleware, UsersController.profileUpdate);


module.exports = router;