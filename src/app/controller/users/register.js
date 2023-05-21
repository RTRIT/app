const User = require('../../models/User');
const bcrypt = require('bcrypt');

class registerController{
    // [GET] /register
     show(req,res, next){
        res.render('users/register')
     }
     store(req, res, next){
        //  console.log(req.body)
     }
     validate(req, res, next){
      const {name, email, password, password2} = req.body;
      var flag=false;
      var errors=[];
    if(name=='' || email=='' || password=='' || password2==''){   //Dieu kien co van de
        errors.push("Please fill in all the fields");
        flag=true;
    }
    if(password!=password2){
        errors.push("Password does not match");
        flag=true;
    }
    if(password.length<6){
        errors.push("Password should be at least 6 character");
        flag=true;
    }
    console.log(errors.length)
    if(errors.length>0){
        res.render('users/register', {
            flag,
            errors,
            name,
            email, 
            password,
            password2
        })
    }else{
        // Validation passed
        User.findOne({email})
         .then(user => {
            //User exist
            if(user){
               flag=true;
               user.cart.push('1231412')
               errors.push("Email is already exist");
               res.render('users/register',{
                  flag,
                  errors,
                  name,
                  email,
                  password,
                  password2
               })
            }else{
               const newUser = new User({
                  name,
                  email,
                  password
               })
               // Hash Password
               bcrypt.genSalt(10, function(err, salt){
                  bcrypt.hash(newUser.password, salt, (err, hash)=>{
                     newUser.password = hash;
                     // Save user
                     newUser.save()
                        .then(() => res.render('users/login'))
                        .catch();
                  })
               })
               
            }
         })
      }
   }
}

module.exports = new registerController;