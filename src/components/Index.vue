<template>
<div>
    <div class="banner-box" ref="box">
        <div class="box" v-bind:style="{'transition': isTouch!=true?'transform 0.5s':'none','transform':isTouch!=true?'translateX(-'+cur+'00%)':'translateX(-'+(cur*$refs.box.offsetWidth+curTouchstartX)+'px)'}" v-on:touchstart="touchstart" v-on:touchmove="touchmove" v-on:touchend="touchend">
            <a v-for="(m,index) in bannreList" v-bind:href="m.Href"><img v-bind:src="m.Img"/></a>
        </div>
        <div class="btn-box">
            <span v-for="i in bannreListLength" v-bind:class="{'_current':cur==i-1}"></span>
        </div>
    </div>
</div>
</template>

<script>
import {GetData} from "../js/GetData.js";
export default {
    name:"Index",
    data:function(){
        return {
            bannreList:null,
            bannreListLength:0,
            cur:0,
            isTouch:null,
            touchstartX:0,
            curTouchstartX:0,
            interval:null
        }
    },
    mounted:function(){
        //取banner数据
        this.bannreList=GetData.GetBanner();
        this.bannreListLength=this.bannreList.length;
        this.isTouch=false;//此处这里赋值，是为了触犯监听来创建计时器
    },
    methods:{
        //手指按下
        touchstart:function(e){
            this.touchstartX = e.changedTouches[0].pageX;
            
        },
        //手指移动
        touchmove:function(e){
            this.curTouchstartX=this.touchstartX - e.changedTouches[0].pageX;
            this.isTouch=true;
        },
        //手指抬起
        touchend:function(e){
            var x=this.touchstartX - e.changedTouches[0].pageX;
            if(x<-this.$refs.box.clientWidth/2){
                this.cur=this.cur<=0?this.cur:this.cur-1;
            }else if(x>this.$refs.box.clientWidth/2){
                this.cur=this.cur>=this.bannreList.length-1?this.cur:this.cur+1;
            }
            this.isTouch=false;
        }
    },
    watch:{
        isTouch:function(){
            if(!this.isTouch){
                //定时切换banner图
                var obj=this;
                this.interval=setInterval(function(){
                    obj.cur=obj.cur>=obj.bannreList.length-1?0:obj.cur+1;
                },5000)
            }else{
                clearInterval(this.interval);
            }
            
        }
    }
}
</script>

<style scoped>
    .banner-box{overflow: hidden;position:relative;}
    .banner-box .box{display: flex;}
    .banner-box a{width:100%;flex-shrink: 0;}
    .banner-box a img{width:100%;height:200px; display:block;}
    .btn-box{position: absolute;left:0px;bottom:10px;width:100%;display: flex;justify-content: center;}
    .btn-box span{width: 10px;height: 10px;border-radius: 50%;background-color:rgba(0,0,0,0.3);margin:0px 5px;}
    .btn-box ._current{background-color:#000;}
</style>