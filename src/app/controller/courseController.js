const { deserializeUser } = require('passport');
const Course = require('../models/Course');
const User = require('../models/User');
const { unsubscribe } = require('../../routes/hp.routes');



class courseController{
    // [GET] /courses/:slug
     show(req,res, next){
         Course.findById({_id : req.params.id}).lean()
            .then(courseDetail => res.render('courses/show', {courseDetail}))
            .catch(next);
     }
      // Lấy ra trang đăng khoá học
      // [GET] /admin/create
      create(req,res){
        res.render('courses/Ad_create');
      } 
    // Khi ấn nút submit thì sẽ chạy vào đây
    // [POST] /admin/store
      store(req,res, next){
            const form_data = req.body;
            form_data.image = "https://tse4.mm.bing.net/th?id=OIP.93MzzK99brdG0cDMqpYqXwHaHa&pid=Api&P=0";
            const course = new Course(form_data);
            course.save()
            // res.send("course saved!!!")  : Có thể làm cái pop upp trượt dân thông báo là course đã save
                .then(() => res.redirect('/'))
                .catch()
      }
      //[GET] /me/courses/:id/edit
      edit(req, res, next){
        Course.findById(req.params.id).lean()
           .then(course => res.render('courses/edit', {course}))
      }
      //[PUT] /courses/:id/ (update course có id)
      update(req, res, next){
        Course.findOneAndUpdate({_id: req.params.id}, req.body )
          .then(()=>  res.redirect('/me/stored/courses'))
          .catch(next)
      }

      //[DELETE] /courses/:id
      delete(req, res, next){
        Course.deleteOne({_id:req.params.id})
          .then(() => res.redirect('/me/stored/courses'))
          .catch(next);
      }
      updateCart(req,res, next){
        console.log(req.cookies.user_id);
          User.findById(req.cookies.user_id)
            .then((User) => {
              User.cart.push({product_id: req.params.id, qty: req.body.qty})
              // console.log(User.cart);
              res.redirect(`/courses/${req.params.id}`);
              User.save()
            })
            .catch(next)
      }
      showCart(req, res, next){
        User.findById(req.cookies.user_id).lean()
            .then( user => res.render('courses/cart', {user, name: req.body.name}))
            .catch(next);
    }
}

module.exports = new courseController;   