<template>
    <div class="box">
        <BannerSlide/>
        <div class="content-box">
            <div class="img-box">
                <div><img src="http://img1.imgtn.bdimg.com/it/u=1212239151,1890480190&fm=26&gp=0.jpg" /></div>
                <div><img src="http://img1.imgtn.bdimg.com/it/u=2030556663,777201328&fm=26&gp=0.jpg" /></div>
            </div>
            <img class="width-box" src="http://img5.imgtn.bdimg.com/it/u=3166006956,2999577765&fm=26&gp=0.jpg"/>
        </div>
    </div>
</template>

<script>
import BannerSlide from "./Shared/BannerSlide";
export default {
    name:"Index",
    components:{BannerSlide}
}
</script>

<style scoped>
    .box{padding-bottom: 60px;}
    .content-box{padding:10px 10px;}
    .img-box{display: flex;margin-left: -5px;margin-right: -5px;}
    .img-box>div{margin:0px 5px;flex: 1;}
    .img-box img{width:100%;height:150px;display: block;}
    .width-box{width:100%;height:150px;margin-top:10px;}
</style>