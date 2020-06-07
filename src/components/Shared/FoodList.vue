<template>
<div>
  <ul class="FoodList-box" v-on:scroll="scrollTop" ref="box">
    <li v-for="t in typeList" ref="item">
      <h1>{{t.Name}}</h1>
      <ol class="list">
        <li v-for="m in list.filter(function(e){return e.TypeID==t.ID;})">
          <img v-bind:src="m.Img" />
          <div>
            <h3>{{m.Name}}</h3>
            <h4>{{m.Desc}}</h4>
            <h5>￥<span>{{m.Price}}</span></h5>
            <h6>
              <em class="jian" v-show="m.Num>0" v-on:click="m.Num--"><i class="glyphicon glyphicon-minus"></i></em>
              <span v-show="m.Num>0">{{m.Num}}</span>
              <em v-on:click="m.Num++"><i class="glyphicon glyphicon-plus"></i></em>
            </h6>
          </div>
        </li>
      </ol>
    </li>
  </ul>
  <div class="submit-box" v-show="list.filter(s=>{return s.Num>0}).length>0">您当前坐在<b>{{this.$route.query.address}}</b>号桌，共计 <b>{{Sum}}</b>元<span v-on:click="submit">选好了&gt;</span></div>
</div>
</template>

<script>
import axios from "axios"

export default {
  name:"FoodList",
  data:function(){
    return {
      typeList:null,
      list:[],  //给默认值，视图一开始加载就不会报错
      position:[] //每一块的y轴位置
    };
  },
  mounted:function(){
    axios.get(this.apiUrl+'/api/Types').then(response => {
      this.typeList = response.data;
      //typeList和List都加载完在计算y轴位置
      this.$nextTick(function(){  //数据更新后并不会立马渲染在dom上，所以要用$nextTick 方法
        this.position.splice(0,this.position.length);
        var lis=this.$refs.item;
        var height=0;
        for(var m of lis){
          this.position.push(height);
          height+=m.clientHeight;
        }
      });
    }).catch(function (error) {alert('请求失败');});
    axios.get(this.apiUrl+'/api/Ordering').then(response => {
      this.list = response.data;
      //typeList和List都加载完在计算y轴位置
      this.$nextTick(function(){  //数据更新后并不会立马渲染在dom上，所以要用$nextTick 方法
        this.position.splice(0,this.position.length);
        var lis=this.$refs.item;
        var height=0;
        if(lis!=null&&lis.length>0){
          for(var m of lis){
            this.position.push(height);
            height+=m.clientHeight;
          }
        }
      });
      //添加字段
      for(var m of this.list){
        this.$set(m,'Num',0);
      }
    }).catch(function (error) {alert('请求失败');});
    
  },methods:{
    scrollTop:function(pos){
      //判断当前显示的是哪一个
      var top=pos.target.scrollTop+1; //此处+1,因为设置的值与获取的值会有偏差
      for(var i=0;i<this.position.length;i++){
        if(i<this.position.length-1){
          if(top>this.position[i]&&top<this.position[i+1]){
            this.$emit('returnCur',i);  //执行回调函数（自定义事件）
          }
        }else{
          if(top>this.position[i]){
            this.$emit('returnCur',i);  //执行回调函数（自定义事件）
          }
        }
      }
    },
    submit:function(){
      var objArr=[];
      for(var m of this.list.filter(s=>{return s.Num>0})){
        objArr.push({ID:m.ID,Num:m.Num});
      }
      alert('提交成功');
      //GetData.Submit(objArr);
    }
  },
  props:["curIndex"], //提供一个对外属性
  watch:{
      curIndex:function(){  //当对外属性发生更改后做相应处理
        var top=this.position[this.curIndex];
        this.$refs.box.scrollTo(0,top);
      }
    },
  computed:{
    Sum:function(){
      var count=0;
      for(var m of this.list){
        count+=m.Num*m.Price;
      }
      return count;
    }
  }
  }
</script>

<style scoped>
  .FoodList-box{height:100vh;padding:0px 10px 80px 10px;overflow: auto;}
  .FoodList-box h1{line-height:50px;}
  .list{border-bottom:1px solid transparent;}/*此处这样设置是为了，当子节点设置margin-bottom时，js的 m.clientHeight 取值正确*/
  .list li {display: flex;margin-bottom: 15px;}
  .list li img{width:80px;height:80px;display:block;}
  .list li>div{flex: 1;position: relative;padding-top:10px;padding-left: 10px;}
  .list li>div h3{color:#666;font-weight: bold;}
  .list li>div h4{font-size: 12px;color:#aaa;height:20px;line-height: 20px;}
  .list li>div h5{margin-top: 5px;color:#F75252;font-size: 12px;}
  .list li>div h5 span{font-size: 14px;}
  .list li>div h6{position: absolute;right:0px;bottom: 5px;display: flex;}
  .list li>div h6 em{font-size:12px;background-color:red;color:#fff;border-radius: 50%;width:20px;height: 20px;line-height:20px;text-align: center;}
  .list li>div h6 .jian{border:1px solid red;color:red;background-color: #fff;}
  .list li>div h6 span{width:20px;text-align: center;}
  .submit-box{position: fixed;bottom:50px;left:0px;width:100%;background-color:#FC5050;color:#fff;font-weight: bold;padding:10px 20px;border-top-left-radius:10px;border-top-right-radius:10px;display: flex;}
  .submit-box span{flex:1;text-align: right;}
</style>