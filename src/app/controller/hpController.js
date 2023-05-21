// Tại đây ta sẽ chọc vào database để lấy dữ liệu
//Cách 1:
// const mongoose = require('mongoose');
// const Course = require('../models/Course')
// const myModel = mongoose.model('Course', Course);

// Cách 2:
const Course = require('../models/Course');
const User = require('../models/User')


class hpController{
    // Controller chọc sang model
    index(req,res, next){
        // Dùng promise do callback không còn được mongoose hỗ trợ nữa
        
        Course.find({}).lean() // C1: Dùng lean do mongoose hỗ trợ để trả về old plain Javascript object, 
                               // C2: Dùng map (Theo anh Sơn F8 - Bài Read from DB)
            .then(courses => res.render('home', {courses}))   // Để render ra courses thì truyền courses qua vieư home.hbs
            .catch(next);
        // res.send(req.body);
        //Kiem tra cooloe
        // console.log(req.cookies)
    // Controller chọc sang view
    // [GET] /home
    //    res.render("home")
    }
}

module.exports = new hpController;