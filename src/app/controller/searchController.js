class searchController{
    // [POST] /news
    index(req,res){
        
        console.log(req.body);
        res.render("search")  
    }
}

module.exports = new searchController;

// thử testing việc sửa đổi trên git xem sao
