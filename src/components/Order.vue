<template>
<div>
    <div class="box">
        <router-link to="/Order">全部</router-link>
        <router-link to="/Order?id=1">进行中</router-link>
        <router-link to="/Order?id=2">结束</router-link>
    </div>
    <OrderList v-bind:id="1" v-if="$route.query.id==null||$route.query.id==1"></OrderList>
    <OrderList v-bind:id="2" v-if="$route.query.id==null||$route.query.id==2"></OrderList>
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
    .box{display:flex;}
    .box a{line-height: 34px;flex: 1;text-align: center;border-bottom: 2px solid #EA6A6A;margin:0px 25px;font-size: 14px;font-weight: bold;color:#666;}
</style>