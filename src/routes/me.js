const express = require('express');
const router = express.Router()  // Hàm này trả về một new router object có thể handle request 
const meController = require('../app/controller/meController')

// ------ Ở giữa là code chạy new -----------

router.get('/stored/courses', meController.storeCourses);




// ------------------------------------------
module.exports = router;