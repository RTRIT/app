const Course = require('../models/Course');

class courseController{
    // [GET] /courses/:slug
     storeCourses(req,res, next){
         Course.find({}).lean()
            .then(courses => res.render('courses/storedCourses', {courses}))
            .catch(next);
     }
      // Lấy ra trang đăng khoá học
      // [GET] /admin/create

    // Khi ấn nút submit thì sẽ chạy vào đây
    // [POST] /admin/store
    
}

module.exports = new courseController;