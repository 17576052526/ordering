<template>
    <div>
        <ul>
            <li v-for="m in list">
                <img v-bind:src="m.Img"/>
                <div>
                    <h3>{{m.Name}}</h3>
                    <h4>{{m.Desc}}</h4>
                    <h5>￥<span>{{m.Price}}</span></h5>
                    <h6>数量<i>{{m.Num}}</i></h6>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import {GetData} from "../../js/GetData.js";
export default {
    name:"OrderList",
    data:function(){
        return {
            list:null
        };
    },
    props:["id"],
    mounted:function(){
        //this.list=this.id==1?GetData.GetOrderProgress():GetData.GetOrder();
    }
}
</script>

<style scoped>
    ul li {display:flex;margin-bottom: 15px;}
    ul li img{width:100px;height:100px;display: block;}
    ul li div{flex: 1;position: relative;padding-left:15px;padding-top:10px;}
    ul li div h3{font-weight: bold;color:#666;}
    ul li div h4{height:24px;line-height:24px;color: #aaa;font-size: 12px;}
    ul li div h5{margin-top:10px;font-size:12px;color:red;}
    ul li div h5 span{font-size: 14px;}
    ul li div h6{position:absolute;bottom:15px;right:10px;font-size:12px;}
    ul li div h6 i{font-size:16px;margin-left:10px;}
</style>