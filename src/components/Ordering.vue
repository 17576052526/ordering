<template>
  <div class="box">
    <ul class="left">
      <li v-for="(m,i) in typeList" v-bind:class="{'_active':curIndex==i}" v-on:click="curIndex=i;foodListCur=i">{{m.Name}}<span v-show="SumByID(m.ID)>0">{{SumByID(m.ID)}}</span></li>
    </ul>
    <FoodList v-on:returnCur="FoodListReturn" v-bind:curIndex="foodListCur" ref="food" />
  </div>
</template>

<script>
import FoodList from './Shared/FoodList'
import axios from "axios"

export default {
    name:"Ordering",
    data:function(){
      return{
        typeList:null,
        curIndex:0,
        foodListCur:0
      };
    },
    mounted:function(){
      axios.get(this.apiUrl+'/api/Types').then(response => {this.typeList = response.data;}).catch(function (error) {alert('请求失败');});
    },
    components:{FoodList},
    methods:{
      //回调函数，右边滑动到某一个块时返回标识
      FoodListReturn:function(data){
        this.curIndex=data;
      },
      //计算每一个类型已点多少菜品
      SumByID:function(id){
        var count=0;
        this.$refs.food.list.filter(s=>{return s.TypeID==id;}).forEach(function(m){
          count+=m.Num;
        })
        return count;
      }
    }
}
</script>


<style scoped>
  .box{display: flex;}
  .box>*:first-child{flex: 3;}
  .box>*:nth-child(2){flex: 7;}

  .left{background-color: #fafafa;height: 100vh;padding-bottom: 60px;overflow: auto;}
  .left li{line-height: 40px;text-align: center;position: relative;}
  ._active{background-color: #fff;}
  .left li span{width:20px;height:20px;line-height:20px;text-align:center;position:absolute;top:0px;right:0px;border-radius:50%;background-color:red;color:#fff;}
</style>