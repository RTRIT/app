// Đọc doc: mongoose github để biết cách kết nối đến database
// Code bên dưới là connect tới database bằng mongoose
const mongoose = require('mongoose');

// await sẽ nằm trong async function
async function connect(){
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/Camera_store', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected Successfully")
    }catch(error){
        console.log("Fail!!!")
    }
}


module.exports = {connect}; 