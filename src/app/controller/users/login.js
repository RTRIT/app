const localStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

//Load user model
const User = require('../../models/User');



class loginController{
    // [GET] /login
     show(req,res){
          res.render('users/login', {layout: 'log_reg'}); // {layout: false}, second parameter 
     }
     
}

module.exports = new loginController;

