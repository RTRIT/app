const Course = require('../models/Course');
const User = require('../models/User');

class cartController{
    show(req, res, next){
        User.findById({_id:req.cookies.usr_id}).lean()
            .then(usr => {
                res.send(usr)
            })
            .catch(next);
    }
}

module.exports = new cartController;