var http = require("http");
const qs = require("querystring");
const mysql = require("mysql");
const bodyParser = require('body-parser');

var connection = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"root",
	database:"eleme",
	multipleStatements:true
})

exports.login = function(req,res){
	var sql = "select * from user where username = ?"
	var params = [req.body.username];
	connection.query(sql,params,function(err,result){
		if(err) throw err;
		
		var password1 = req.body.password;
		var password2 = "-1";
		
		if(result.length != 0)
		{
			password2 = result[0].password;
		}
		var resData = {
			status:"1",
			msg:"",
		}
		
		if(password1 == password2)
		{
			resData.status = "1",
			resData.msg = "登录成功"
			res.send(resData);
		}
		else{
			resData.status = "0",
			resData.msg = "账号密码错误"
			res.send(resData);
		}
	})
}

exports.sign = function(req,res){
	var username1 = req.body.username;
	var password1 = req.body.password;
	
	var sql1 = "select * from user where username = ?"
	var params1 = [username1];
	
	connection.query(sql1,params1,function(err,result){
		if(err) throw err;
		if(result.length != 0)
		{
			var resData = {
				status:"0",
				msg:"该账号已经注册 请重试"
			}
			res.send(resData);
		}
		else{
			var sql2 = "insert into user(username,password) values(?,?)";
			var params2 = [username1,password1];
			
			connection.query(sql2,params2,function(err,result){
				if(err) throw err;
				if(result.affectedRows == 1)
				{
					var resData = {
						status:"1",
						msg:"该账号注册成功"
					}
					res.send(resData);
				}
				else{
					var resData = {
						status:"-1",
						msg:"未知错误"
					}
					res.send(resData);
				}
			})
		}
	})
}
