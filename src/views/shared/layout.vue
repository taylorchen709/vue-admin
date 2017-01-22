<template>
    <div>
        <el-row class="panel-top">
            <el-col :span="24" class="panel-top">
                <el-col :span="4" style="font-size:26px;">
                    <img src="../../assets/logo4.png" class="logo"> <span>企信<i style="color:yellow">外挂平台</i></span>
                </el-col>
                <el-col :span="4">
                    <el-button type="text">
                        <a href="/#/table"  class="nav-item">table</a>
                    </el-button>
                </el-col>

                <el-col :span="2" v-if="!$oidcMgr.expired" :offset="12">
                    <el-tooltip class="item tip-logout" effect="dark" content="-退出-" placement="bottom"
                                style="padding:0px;">
                        <!--<i class="logout" v-on:click="logout"></i>-->
                        <i class="fa fa-sign-out" aria-hidden="true"
                           @click="redirectForLogout">退出{{$oidcMgr.profile.given_name}}</i>
                    </el-tooltip>
                </el-col>
                <el-col :span="2" v-else :offset="12">
                    <el-tooltip class="item tip-login" effect="dark" content="-登陆-" placement="bottom"
                                style="padding:0px;">

                        <!--<i class="logout" v-on:click="logout"></i>-->
                        <i class="fa fa-sign-in" aria-hidden="true"
                           @click="redirectForToken">登陆!</i>
                    </el-tooltip>
                </el-col>
                <!--<el-col :span="4">-->
                <!--<el-tooltip class="item tip-logout" effect="dark" content="退出" placement="bottom"-->
                <!--style="padding:0px;">-->
                <!--&lt;!&ndash;<i class="logout" v-on:click="logout"></i>&ndash;&gt;-->
                <!--<i class="fa fa-sign-out" aria-hidden="true" @click="logout"></i>-->
                <!--</el-tooltip>-->
                <!--</el-col>-->
            </el-col>
        </el-row>
        <el-row :span="24" class="panel-center">
            <slot></slot>
        </el-row>
    </div>

</template>

<script lang=babel>
  //import 'oidc-token-manager'
  export default {
//    watch: {
//      '$route' (to, from) {//监听路由改变
//        console.log('layout::::::::::::::::to-->from:', to, from)
//      }
//    },
    methods: {
      redirectForLogout(){
        this.$oidcMgr.redirectForLogout();
      },
      redirectForToken(){
        this.$oidcMgr.redirectForToken();
      }
    },
//    mounted(){
//      let ath = 'handler/212';
//      let free = 'vue_man';
//      this.$http.get(ath).then((payload) => {
//        console.log('payload', payload.data)
//        this.tableData = [[payload.data]];
//        //util.deepInTranWithDateObject(this.tableData, 'yyyy-MM-dd')
//      }).catch(error => {
//        console.log('line-error', error)
//
//      })
//    }
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
        height: 40px;
        line-height: 40px;
        background: #428bca;

        color: #c0ccda;
    }

    .panel-center {

        position: absolute;
        top: 60px;
        bottom: 0px;
        overflow: hidden;
        width:100%
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
        background: url(../../assets/logout_36.png);
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