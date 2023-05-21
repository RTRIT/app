const express = require('express');
const router = express.Router();
const login = require('../app/controller/users/login');
const register = require('../app/controller/users/register');
const loginVal = require('../app/validate/login_validate');
// const passport = require('../config/passport');


//Login page
router.get('/login', login.show);
router.post('/login', loginVal.loginValidate);
// router.post('/login', login.local_Storage);

// router.post('/login', passport.authenticate);

//Register page
router.get('/register', register.show);
router.post('/register', register.validate);

module.exports = router;