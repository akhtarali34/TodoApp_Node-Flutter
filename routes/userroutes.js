const router = require("express").Router();
const userController = require ("../controllers/usercontroller")


router.post("/registeration", userController.register);

module.exports = router;