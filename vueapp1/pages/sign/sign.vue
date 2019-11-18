<template>
	<view class="xtFlex signRoot">
		<view class="container">
			<form>
				<view class="itemRow">
					<input class="inputItem" type="text" placeholder="请输入用户名">
				</view>
				<view class="itemRow">
					<input class="inputItem" type="text" password placeholder="请输入密码">
				</view>
				<view class="itemRow">
					<input class="inputItem" type="text" password placeholder="请确认密码">
				</view>
				<view class="itemRow buttonContainer">
					<button class="button" type="primary" @click="toSign">sign</button>
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
	
	export default {
		data(){
			return{
				resMsg : "返回信息",
			}
		},
		methods:{
			toLogin(){
				this.$router.push({path:"/pages/login/login"})
			},
			toSign(){
				
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
