const express = require('express');
const router = express.Router()  // Hàm này trả về một new router object có thể handle request 
const courseDetail = require('../app/controller/courseController')
const courses_list = require('../app/controller/hpController')
const cart = require('../app/controller/cartController')
// ------ Ở giữa là code chạy new -----------
router.get('/courses/create',courseDetail.create);
router.post('/courses/store',courseDetail.store); // Khi bấm submit trong form thêm khoá học ở trang courses/create thì được hiểu là method post
router.get('/courses/cart', courseDetail.showCart)
router.get('/courses/:id', courseDetail.show );
router.get('/courses/:id/edit', courseDetail.edit);
router.put('/courses/:id', courseDetail.update);
router.delete('/courses/:id', courseDetail.delete);
router.put('/courses/:id/cart', courseDetail.updateCart )


// router.get('/courses/:slug', courseDetail.show );x
router.get('/', courses_list.index);


// ------------------------------------------
module.exports = router;