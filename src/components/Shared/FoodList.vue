<template>  
<ol v-on:scroll="scrollHeight" ref="box">
  <li v-for="t in typeList" ref="item">
    <p>{{t.Name}}</p>
<ul>
  <li v-for="m in list.filter(function(e){return e.TypeID==t.ID;})">
    <img v-bind:src="m.Img" />
    <div>
      <h4>{{m.Name}}</h4>
      <h6>{{m.Desc}}</h6>
      <h5>
        <span>￥<span>{{m.Price}}</span></span>
        <i>
          <b v-on:click="m.Num--" v-show="m.Num>0" class="jian">-</b>
          <em v-show="m.Num>0">{{m.Num}}</em>
          <b v-on:click="m.Num++">+</b>
        </i>
      </h5>
    </div>    
  </li>
</ul>
  </li>
</ol>

</template>

<script>
/*
对外属性：setCur，用来设置显示哪个块
对外事件：current，用来返回当前选中的块
*/

import {GetData} from './../../js/GetData.js'

export default {
  name:"typelist",
  data:function(){  //定义格式，也可以直接在这ajax取数据
    return {
      list:null,
      typeList:null,
      position:[]   //用来记录每一个标题所在的位置
    };
  },
  mounted:function(){ //html加载完执行
    this.list=GetData.GetOrdering();
      this.typeList=GetData.GetType();
      for(var m of this.list){
        this.$set(m,"Num","0");
      }
      this.$nextTick(function(){  //数据更新后并不会立马渲染在dom上，所以要用$nextTick 方法
        var lis=this.$refs.item;
        var height=0;
        for(var m of lis){
          this.position.push(height);
          height+=m.clientHeight;
          //this.position.push(m.getBoundingClientRect().top);
        }
      });  
  },
  methods:{
    scrollHeight:function(pos){
      //判断当前显示的是哪一个
      var top=pos.target.scrollTop;
      for(var i=0;i<this.position.length;i++){
        if(i<this.position.length-1){
          if(top>this.position[i]&&top<this.position[i+1]){
            this.$emit('current',i);
          }
        }else{
          if(top>this.position[i]){
            this.$emit('current',i);
          }
        }
      }
    }
  },props:["setCur"], //提供一个对外属性
  watch:{
    setCur:function(){  //当对外属性发生更改后做相应处理
      var top=this.position[this.setCur];
      this.$refs.box.scrollTo(0,top);
    }
  }
}
</script>

<style scoped>
ol{
  height:100vh;
  padding-bottom:60px;
  padding-left: 20px;
  overflow: auto;
}
ol>li>p{color:#666;line-height:50px;}
ul li {display:flex;margin-bottom: 15px;}
  ul li img{
    width:100px;
    height:100px;
    display: block;
  }
  ul li div{
    padding:10px 20px;
    flex:1;
    position:relative;
  }
  h6{color:#aaa;height:30px;}
  h4{color:#666;font-weight: bold;}
  h5{margin-top:10px;}
  h5>span{color:red;font-size:12px;}
  h5>span>span{font-size:14px;}
  h5>i{position: absolute;bottom:10px;right:10px;display: flex;}
  h5>i>b{font-weight: normal;font-size:16px; background-color:red;border-radius:50%;width:20px;height:20px;line-height:20px;text-align:center;color:#fff;}
  h5>i>b.jian{background-color:transparent;border:1px solid red;color:red;}
h5>i>em{width:20px;text-align:center;}
</style>