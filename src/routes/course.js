const express = require('express');
const router = express.Router()  // Hàm này trả về một new router object có thể handle request
// HÀm dưới import vào controller của new vào( hay handle fucntion)
const courseController = require('../app/controller/courseController');
// ------ Ở giữa là code chạy new -----------


// router.get('/:slug', courseController.show)



// ------------------------------------------
module.exports = router;