<template>
<div>
    <router-link to="/Index" active-class="_active"><i class="glyphicon glyphicon-home"></i>首页</router-link>
    <router-link to="/Ordering" active-class="_active"><i class="glyphicon glyphicon-edit"></i>点餐</router-link>
    <router-link to="/Order" active-class="_active"><i class="glyphicon glyphicon-tree-deciduous"></i>订单</router-link>
</div>
</template>

<style scoped>
    div{display:flex;background-color:#eee;position:fixed;bottom:0px;width:100%;border-top:1px solid #ccc;color:#666;padding:7px 0px 5px 0px;}
    div a{flex:1;text-align: center;}
    div a i{display:block;margin-bottom:5px;}
     ._active{
         color:red;
     }
</style>