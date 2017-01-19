<template>
	<el-row class="panel">
		<el-col :span="24" class="panel-top">
			<el-col :span="20" style="font-size:26px;">
<img src="../assets/logo4.png" class="logo"> <span>AD<i style="color:#20a0ff">MIN</i>
</span>
</el-col>
<el-col :span="4" class="rightbar">
	<el-dropdown trigger="click">
		<span class="el-dropdown-link" style="color:#c0ccda;cursor: pointer;"><img src="../assets/user.png" class="head"> 张某某
</span>
<el-dropdown-menu slot="dropdown">
	<el-dropdown-item>我的消息</el-dropdown-item>
	<el-dropdown-item>设置</el-dropdown-item>
	<el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
</el-dropdown-menu>
</el-dropdown>
<!--<el-tooltip class="item tip-logout" effect="dark" content="退出" placement="bottom" style="padding:0px;">
<i class="fa fa-sign-out" aria-hidden="true" v-on:click="logout"></i>
</el-tooltip>-->
</el-col>
</el-col>
<el-col :span="24" class="panel-center">
	<!--<el-col :span="4">-->
	<aside style="width:230px;">
<!--<h5 class="admin">
	<i class="fa fa-user" aria-hidden="true" style="margin-right:5px;"></i>欢迎系统管理员：测试</h5>-->
<!--<el-menu style="border-top: 1px solid #475669;" default-active="/table" class="el-menu-vertical-demo" @open="handleopen"
					@close="handleclose" @select="handleselect" theme="dark" unique-opened router>
					<el-submenu index="1">
						<template slot="title"><i class="el-icon-message"></i>导航一</template>
						<el-menu-item index="/table">Table</el-menu-item>
						<el-menu-item index="/form">Form</el-menu-item>
						<el-menu-item index="/page3">页面3</el-menu-item>
					</el-submenu>
					<el-submenu index="2">
						<template slot="title"><i class="fa fa-id-card-o"></i>导航二</template>
						<el-menu-item index="/page4">选项4</el-menu-item>
						<el-menu-item index="/page5">选项5</el-menu-item>
					</el-submenu>
					<el-menu-item index="/page6"><i class="fa fa-line-chart"></i>导航三</el-menu-item>
				</el-menu>-->
<el-menu :default-active="currentPath" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose" @select="handleselect"
	theme="dark" unique-opened router>
	<template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
		<el-submenu :index="index+''" v-if="!item.leaf">
			<template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
			<el-menu-item v-for="child in item.children" :index="child.path">{{child.name}}</el-menu-item>
		</el-submenu>
		<el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
	</template>
</el-menu>
</aside>
<!--</el-col>-->
<!--<el-col :span="20" class="panel-c-c">-->
<section class="panel-c-c">
	<div class="grid-content bg-purple-light">
		<el-col :span="24" style="margin-bottom:15px;">
<strong style="width:200px;float:left;color: #475669;">{{currentPathName}}</strong>
<el-breadcrumb separator="/" style="float:right;">
<el-breadcrumb-item :to="{ path: '/table' }">首页</el-breadcrumb-item>
<el-breadcrumb-item v-if="currentPathNameParent!=''">{{currentPathNameParent}}</el-breadcrumb-item>
<el-breadcrumb-item v-if="currentPathName!=''">{{currentPathName}}</el-breadcrumb-item>
</el-breadcrumb>
</el-col>
<el-col :span="24" style="background-color:#fff;box-sizing: border-box;">
<!--<transition name="fade">-->
<router-view></router-view>
<!--</transition>-->
</el-col>
</div>
</section>
<!--</el-col>-->
</el-col>
</el-row>
</template>

<script>
	export default {
		data() {
			return {
				currentPath: '/table',
				currentPathName: 'Table',
				currentPathNameParent: '导航一',
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				}
			}
		},
		watch: {
			'$route'(to, from) {//监听路由改变
				this.currentPath = to.path;
				this.currentPathName = to.name;
				this.currentPathNameParent = to.matched[0].name;
			}
		},
		methods: {
			onSubmit() {
				console.log('submit!');
			},
			handleopen() {
				//console.log('handleopen');
			},
			handleclose() {
				//console.log('handleclose');
			},
			handleselect: function (a, b) {
			},
			//退出登录
			logout: function () {
				var _this = this;
				this.$confirm('确认退出吗?', '提示', {
					//type: 'warning'
				}).then(() => {
					_this.$router.replace('/login');
				}).catch(() => {

				});


			}
		}
	}
</script>

<style scoped>
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity .5s
	}
	
	.fade-enter,
	.fade-leave-active {
		opacity: 0
	}
	
	.panel {
		position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
	}
	
	.panel-top {
		height: 60px;
		line-height: 60px;
		background: #1F2D3D;
		color: #c0ccda;
	}

	.panel-top .rightbar{
		text-align: right;
		padding-right: 35px;
	}

	.panel-top .rightbar .head{
		width: 40px;
    	height: 40px;
		border-radius: 20px;
		margin: 10px 0px 10px 10px;
    	float: right;
	}
	
	.panel-center {
		background: #324057;
		position: absolute;
		top: 60px;
		bottom: 0px;
		overflow: hidden;
	}
	
	.panel-c-c {
		background: #f1f2f7;
		position: absolute;
		right: 0px;
		top: 0px;
		bottom: 0px;
		left: 230px;
		overflow-y: scroll;
		padding: 20px;
	}
	
	.logout {
		background: url(../assets/logout_36.png);
		background-size: contain;
		width: 20px;
		height: 20px;
		float: left;
	}
	
	.logo {
		width: 40px;
		float: left;
		margin: 10px 10px 10px 18px;
	}
	
	.tip-logout {
		float: right;
		margin-right: 20px;
		padding-top: 5px;
	}
	
	.tip-logout i {
		cursor: pointer;
	}
	
	.admin {
		color: #c0ccda;
		text-align: center;
	}
</style>