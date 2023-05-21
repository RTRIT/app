const express = require('express');
const router = express.Router()  // Hàm này trả về một new router object có thể handle request
const searchController = require('../app/controller/searchController');
// ------ Ở giữa là code chạy new -----------

router.get('/', searchController.index);

// ------------------------------------------

module.exports = router;