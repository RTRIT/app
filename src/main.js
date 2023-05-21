const path = require('path');
const express = require('express'); // cài đặt express modules, dùng require để load các modules đó
const app = express();  // biến app để lưu lại new Express app
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const helpers = require('../src/resource/views/components/hbsHelper')
const hbs = require('express-handlebars');
var methodOverride = require('method-override')
const port = 3000;

// Nạp file index.js vào
const route = require('./routes/index');

// Connect to database
  //Import db
const db = require('./config/db');
  //Connect to db
db.connect();


const help = hbs.create({
  helpers
})


  
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))



//  Cấu hình sử dụng những file tĩnh đứng từ public
//  express.static is a built-in middleware function in Express, it serves static file and is based on server-static
//  Dòng code bên dưới hiểu là: Serve static content for the app 
//from the “public” directory in the application directory:
app.use(express.static(path.join(__dirname, 'public')));




//Express session



//Passport middleware
// app.use(passport.)
// app.use(passport.session());
// app.use(passport.authenticate('session'));




// HTTP logger
app.use(morgan('combined'))

//Template engine ejs




//view engine setup
app.engine('hbs', hbs.engine({ // app.engine hiểu là app sử dụng template engine là handlebars, handlebars.engine hiểu là use this package handlebars
  extname: '.hbs',
  helpers: require('./resource/views/components/hbsHelper'),
}));
app.set('view engine', 'hbs'); // app's "view engine" setting will make that value the default file extension used for looking up views.__dirname + 'views/partials'
app.set('views', path.join(__dirname, 'resource','views')); // Cấu hình views sẽ được tìm theo đường dẫn được tạo ra từ path.join(__dirname, 'resource','views') 
  //* Gửi code js để xử lý thì dùng:
app.use(express.json());
  // middleware xử lý form gửi lên cho chúng ta - Trong bài POST method 
  //=> Trong express 4.16 trở lên đã tích hợp middleware trong body rồi
  //* Đây là gửi dạng form lên để xử lý
app.use(express.urlencoded({
  extended: true     // express sử dụng được urlencoded, json là do đang sử dụng thư viện body parser npm
}));
//Cookie parser for every request
app.use(cookieParser());




// Gọi route với đối số là app
route(app); 



app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})
 