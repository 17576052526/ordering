<template>
  <div>
    <TypeList v-on:current="TypeListReturn" v-bind:setCur="leftCur"/>
    <FoodList v-on:current="FoodListReturn" v-bind:setCur="rightCur"/>
  </div>
</template>
<script>
import TypeList from './Shared/TypeList'
import FoodList from './Shared/FoodList'
export default {
  name:"Ordering",
  data:function(){
    return {
      leftCur:null,
      rightCur:null
    };
  },
  components:{TypeList,FoodList},
  methods:{
    TypeListReturn:function(data){  //接收子组件返回过来的数据
      this.rightCur=data;
    },
    FoodListReturn:function(data){    //接收子组件返回过来的数据
      this.leftCur=data;
    }
    
  }
}
</script>

<style scoped>
  div{display:flex;}
  div>*:nth-child(1){flex:3;}
  div>*:nth-child(2){flex:7;}
</style>