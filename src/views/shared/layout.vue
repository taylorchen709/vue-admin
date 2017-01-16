<template>
    <el-row class="panel">
        <el-col :span="24" class="panel-top">
            <el-col :span="20" style="font-size:26px;">
                <img src="../../assets/logo4.png" class="logo"> <span>AD<i style="color:#20a0ff">MIN</i></span>
            </el-col>
            <el-col :span="4">
                <el-tooltip class="item tip-logout" effect="dark" content="退出" placement="bottom" style="padding:0px;">
                    <!--<i class="logout" v-on:click="logout"></i>-->
                    <i class="fa fa-sign-out" aria-hidden="true" @click="logout"></i>
                </el-tooltip>
            </el-col>
        </el-col>
        <router-view>


        </router-view>
    </el-row>

</template>

<script lang=babel>


    export default {

        data() {
            return {

            }
        },
        watch: {
            '$route' (to, from) {//监听路由改变
                console.log('to-->from:',to,from)
            }
        },
        methods: {

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
        background: url("../../assets/logout_36.png");
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