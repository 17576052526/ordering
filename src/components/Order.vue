<template>
<div>
    <div class="box">
        <router-link to="/Order" exact-active-class="_active">全部</router-link>
        <router-link to="/Order?id=1" exact-active-class="_active">进行中</router-link>
        <router-link to="/Order?id=2" exact-active-class="_active">结束</router-link>
    </div>
    <div class="content-box">
        <OrderList id="1" v-show="$route.query.id==null||$route.query.id==1"></OrderList><!--此处用 v-if 切换有bug-->
        <OrderList id="2" v-show="$route.query.id==null||$route.query.id==2"></OrderList>
    </div>
</div>
</template>

<script>
/*
此处并没有监听路由，因为路由已经绑定到节点上v-if中去了
*/
import OrderList from "./Shared/OrderList";

export default {
    name:"Order",
    data:function(){
        return {
            list:null
        };
    },
    components:{OrderList},
    mounted:function(){
        
    }

}
</script>

<style scoped>
    .box{display:flex;position:fixed;top:0px;left:0px;z-index:1;width:100%;background-color: #fff;}
    .box a{line-height: 34px;flex: 1;text-align: center;border-bottom: 2px solid transparent;margin:0px 25px;font-size: 14px;font-weight: bold;color:#666;}
    .box ._active{border-bottom-color: #EA6A6A;}
    .content-box{padding:45px 10px 60px 10px;}
</style>