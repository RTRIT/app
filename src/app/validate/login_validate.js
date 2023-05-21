const mongoose = require('mongoose');
const User = require('../models/User');
const bcrypt = require('bcrypt');



module.exports.loginValidate = function(req, res, next){
        const {email, password} = req.body;
        var flag = false;
        var errors=[];
        //Tìm user trong db
        User.findOne({email})
             .then(usr => {
                  // Kiểm tra xem email có trong db không
                  if(usr){
                       // NẾu có thì so sánh pwd
                       bcrypt.compare(password, usr.password, function(err, result){
                            // Nếu đúng passwd thì: 
                            if(result){
                              // const {usrname} = usr.name;
                              // console.log(pars);
                                 // set cookie và chuyển hướng về main page
                                 res.cookie('user_id', usr.id);
                              //    localStorage.setItem('user_id', usr.id);
                                 res.redirect('/');
                            }else{
                                 flag=true;
                                 errors.push("Password is not correct !!!");
                                 res.render('users/login',
                                 {
                                      email,
                                      password,
                                      flag, 
                                      errors
                                 }
                                 )
                            }
                       })
                  // KHông có thì in ra lỗi 
                  }else{
                       flag=true;
                       // errors.push(err);
                       errors.push("Email is incorrect!!!");
                       res.render('users/login', {
                            email,
                            password,
                            flag, 
                            errors
                       })
                  }
             })
             .catch(err => {
               errors.push(err);
             })
}
