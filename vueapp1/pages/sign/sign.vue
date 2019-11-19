<template>
	<view class="xtFlex signRoot">
		<view class="container">
			<form>
				<view class="itemRow">
					<input class="inputItem" type="text" v-model="username" placeholder="请输入用户名">
				</view>
				<view class="itemRow">
					<input class="inputItem" type="text" v-model="password1" password placeholder="请输入密码">
				</view>
				<view class="itemRow">
					<input class="inputItem" type="text" v-model="password2" password placeholder="请确认密码">
				</view>
				<view class="itemRow buttonContainer">
					<button class="button" type="primary" v-bind:disabled="isDisabled" @click="toSign">sign</button>
					<button class="button" type="default" @click="toLogin">login</button>
				</view>
			</form>
			<view class="msgShow itemRow">
				{{resMsg}}
			</view>
		</view>
	</view>
</template>

<script>
	
	import http from "../../components/http"
	
	export default {
		data(){
			return{
				resMsg : "返回信息",
				username:"",
				password1:"",
				password2:"",
				isDisabled:false,
			}
		},
		methods:{
			toLogin(){
				uni.navigateTo({
					url:"../login/login"
				})
			},
			toSign(){
				this.isDisabled = true;
				
				var opt = {
					url:"/api/sign",
					method:"post"
				}
				
				var data = {
					username:this.username,
					password:this.password1
				}
				
				if(this.username == ""){
					this.resMsg = "请输入用户名"
					this.isDisabled = false;
				}
				else if(this.password1 == "" || this.password2 == "")
				{
					this.resMsg = "请输入密码"
					this.isDisabled = false;
				}
				else if(this.password1 != this.password2)
				{
					this.resMsg = "请确保两次密码输入一致"
					this.isDisabled = false;
				}
				else{
					http.httpTokenRequest(opt,data).then((res)=>{
						this.resMsg = res.data.msg;
						this.isDisabled = false;
					})
				}
			}
		}
	}
	
</script>

<style>
	.signRoot{
		justify-content: center;
	}
	.container{
		width:80%;
		padding:30px 20px;
		padding-top: 15px;
		background-color:rgba(245,245,245,0.8);
		margin-top: 30px;
	}
	.itemRow{
		margin-top: 15px;
	}
	.inputItem{
		height:36px;
		line-height: 36px;
		background-color: white;
		padding-left: 5px;
	}
	.buttonContainer{
		display:flex;
		justify-content: center;
		
	}
	.button{
		width:40%;
		justify-content: center;
	}
	.msgShow{
		line-height: 100%;
		color:#8F8F94;
	}
</style>
