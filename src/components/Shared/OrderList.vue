<template>
    <div>
        <div>{{id==1?"进行中":id==2?"结束":"id参数异常"}}</div>
    </div>
</template>

<script>
export default {
    name:"OrderList",
    props:["id"],
    mounted:function(){
        
    }
}
</script>