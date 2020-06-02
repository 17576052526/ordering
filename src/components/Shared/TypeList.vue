<template>  
<div>
    <span v-for="(m,index) in list" v-bind:class="{'_active':cur==index}" v-on:click="cur=index;$emit('current',index)" >{{m.Name}}</span>
</div>
</template>

<script>
/*
对外属性：setCur，用来设置显示哪个块
对外事件：current，用来返回当前选中的块
*/
//使用$emit触发事件 将当前点击的返回出去

import {GetData} from './../../js/GetData.js'  //注意，此处加了{}，因为js那边不是写成  export default 模式

export default {
  name:"typelist",
  data:function(){
    return {
      list:null,
      cur:null
    };
  },mounted:function(){
    this.list=GetData.GetType();
    this.cur=0;
  },props:["setCur"], //提供一个对外的属性
  watch:{
    setCur:function(){  //对外属性发生更改后更改内部属性
      this.cur=this.setCur;
    }
  }
}
</script>

<style scoped>
 div{display: block;background-color:#eee;box-shadow:3px 3px 3px #ccc;height:100vh;padding-bottom:60px;overflow: auto;}
 div span{display:block;height:40px;line-height:40px;text-align:center;}
 ._active{background-color:#fff;}
</style>