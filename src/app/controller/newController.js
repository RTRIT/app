class newController{
     // [GET] /news
      index(req,res){
         res.render("news") // {layout: false} đặt sau view để yêu cầu khi render ra trang news thì không lấy layout nữa
      }
      show(req,res){
         res.send('NEW DETAILS!!!!')
      }
}

module.exports = new newController;