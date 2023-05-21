const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-updater');
mongoose.plugin(slug);


// Tạo scheme cho model(), (schema giúp trong việc đảm bảo dữ liệu có tính thống nhất)
// Scheme sẽ map tới MongoDb collection and defines the shape of the document within that collection
const Course = new Schema({
    name: {type: String, require: true},
    description: {type: String, maxLength: 600 },
    vidID: {type: String, require: true},
    level: {type: String},
    image: {type: String },
    slug:{type:String, slug: "name", unique: true}
  }, {
    timestamps:true,
  });


//Các cách accessing vào model

// Cách 1:
// module.exports = Course;

// Cách 2: Truyền vào tên model và tên schema
//Compiling schema into model(A model is a class with which we construct documents)
//Câu lệnh dưới dùng để create model
//When you call mongoose.model() on a schema, Mongoose compiles a model for you.
module.exports = mongoose.model('Course', Course);
