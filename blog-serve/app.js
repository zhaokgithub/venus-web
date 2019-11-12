/**
 * @Description:
 * @author zhaokai
 * @date 2019/10/27
 */
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let config = require('./lib/config');
let router = require('./router/v1.0');
let jwt = require('express-jwt');

app.use(bodyParser.json());
app.use(jwt({secret:'zhaokai=jwt'}).unless({
    path:'/api/v1.0/user/login'
}));
app.use('/api/v1.0',router);
app.use('*',function (req,res) {
    console.log('404');
    res.status(404);
    res.json('404')
});

app.listen(config.port,function () {
    console.log('serving is start!')
});