const newRouter = require('./news.routes')  // import từ file new.routes.js vào
const hpRouter = require('./hp.routes')
const courseRouter = require('./course')
const searchRouter = require('./search.routes');
const adminRouter = require('./admin.routes');
const usersRouter = require('./users')
const meRouter = require('./me');


function route(app){
    // app.use to specify middleware as the callback function
    // Những thằng ở dưới đều là middleware function có Mount path, function sẽ được thực thi cho HTTP request tới path đã được đề cập
    // app.use('/search', searchRouter);
    app.use('/news', newRouter);
    // app.use('/admin', adminRouter)
    app.use('/users', usersRouter);
    app.use('/me', meRouter);
    app.use('/', hpRouter);
    // app.use('/', hpRouter);

    
}

module.exports = route;
 


