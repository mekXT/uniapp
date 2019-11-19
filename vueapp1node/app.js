const express = require('express')

const bodyParser = require('body-parser');
const app = express();

//用于解析数据
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var xrouter = require('./routes/index')

app.use('/api/*',function(req,res,next){
	// 设置请求头为允许跨域
	res.header("Access-Control-Allow-Origin","*");
	// 设置服务器支持的所有头信息字段
	res.header("Access-Control-Allow-Headers","Content-Type,Content-Length,Authorization,Accept,X-Requested-With");
	// 设置服务器支持的所有跨域请求的方法
	res.header("Access-Control-Allow-Methods","POST,GET,DELETE,OPTIONS");
	// next()方法表示进入下一个路由
	next();
})

app.use("/",xrouter);

app.listen(8090,()=>{
	console.log("Demo server listening on port 8090")
})