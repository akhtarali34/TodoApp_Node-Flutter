const router = require("express").Router();
const userController = require ("../controllers/usercontroller")

//register Api
router.post("/registeration", userController.register);

//Login Api
router.post("/login", userController.login);


module.exports = router;