const express = require('express');
const router = express.Router()  // Hàm này trả về một new router object có thể handle request
// HÀm dưới import vào controller của new vào( hay handle fucntion)
const newController = require('../app/controller/newController');
// ------ Ở giữa là code chạy new -----------

router.get('/:slug', newController.show)
router.get('/', newController.index);


// ------------------------------------------
module.exports = router;