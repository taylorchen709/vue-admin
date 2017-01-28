<template>
    <div id="app">
        <v-layout>
            <!--<transition name="bounce">-->
            <router-view></router-view>
            <!--</transition>-->

        </v-layout>
    </div>

</template>

<script lang="babel">
  import Layout from './pages/shared/layout.vue'
  export default {
    name: 'app',
    created: function () {
      //this.$router.replace('/abc')
    },
    components: {'v-layout': Layout}
  }
</script>

<style>
    @import "../node_modules/font-awesome/css/font-awesome.min.css";
    @import "../node_modules/flex.css/dist/flex.css";

    .bounce-enter-active {
        animation: bounce-in .5s;
    }

    .bounce-leave-active {
        animation: bounce-out .2s;
    }

    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.05);
        }
        100% {
            transform: scale(1);
        }
    }

    @keyframes bounce-out {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(0.95);
        }
        100% {
            transform: scale(0);
        }
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }

    .fade-enter, .fade-leave-active {
        opacity: 0
    }

    body {
        /*background-color: #324057;*/
        margin: 0px;
        padding: 0px;
        /*background: url(assets/bg1.jpg) center !important;
        background-size: cover;*/
        background: #1F2D3D;
        font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
    }

    #app {
        position: absolute;
        top: 0px;
        bottom: 0px;
        width: 100%;
    }

    .el-submenu [class^=fa] {
        vertical-align: baseline;
        margin-right: 10px;
    }

    .el-menu-item [class^=fa] {
        vertical-align: baseline;
        margin-right: 10px;
    }
</style>