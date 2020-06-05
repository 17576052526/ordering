//获取数据
export const GetData={
    //获取类型
    GetType:function(){
        return [{ID:"1",Name:"冰淇淋与茶"},{ID:"2",Name:"真果茶"},{ID:"3",Name:"奶盖茶"},{ID:"4",Name:"奶茶&特饮"},{ID:"5",Name:"雪王提醒"},{ID:"6",Name:"零食"},{ID:"7",Name:"水果"},{ID:"8",Name:"小吃"}];
    },
    //获取点餐列表
    GetOrdering:function(){
        return [
            {ID:"1",TypeID:1,Name:"冰鲜柠檬水",Img:"http://img1.imgtn.bdimg.com/it/u=1163923359,153178474&fm=26&gp=0.jpg",Price:"7.00",Desc:"暂不支持外卖"},
            {ID:"2",TypeID:1,Name:"满杯百香果",Img:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1809680878,987507727&fm=26&gp=0.jpg",Price:"5.00",Desc:""},
            {ID:"3",TypeID:2,Name:"棒打鲜橙",Img:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=991671455,282499753&fm=26&gp=0.jpg",Price:"7.00",Desc:""},
            {ID:"4",TypeID:2,Name:"雪王大圣代",Img:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2084050122,4180399175&fm=26&gp=0.jpg",Price:"7.00",Desc:""},
            {ID:"5",TypeID:2,Name:"草莓瑶瑶奶昔",Img:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=148412814,3874787436&fm=11&gp=0.jpg",Price:"7.00",Desc:""},
            {ID:"6",TypeID:2,Name:"摩天脆脆",Img:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3129925081,2371384046&fm=26&gp=0.jpg",Price:"7.00",Desc:""},
            {ID:"7",TypeID:2,Name:"雪顶咖啡",Img:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1772589204,2186918377&fm=26&gp=0.jpg",Price:"7.00",Desc:""},
            {ID:"8",TypeID:2,Name:"冰淇淋红茶",Img:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=617568736,1188309860&fm=26&gp=0.jpg",Price:"7.00",Desc:""},
            {ID:"9",TypeID:3,Name:"杨枝甘露",Img:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1264593743,97991590&fm=26&gp=0.jpg",Price:"7.00",Desc:""},
            {ID:"10",TypeID:4,Name:"凤梨四季香",Img:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2062707419,3900706498&fm=26&gp=0.jpg",Price:"7.00",Desc:""},
        ]
    },
    //获取已完成订单
    GetOrder:function(){
        return [
            {ID:"1",TypeID:1,Num:"1",Name:"冰鲜柠檬水",Img:"http://img1.imgtn.bdimg.com/it/u=1163923359,153178474&fm=26&gp=0.jpg",Price:"7.00",Desc:"暂不支持外卖"},
            {ID:"2",TypeID:1,Num:"3",Name:"满杯百香果",Img:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1809680878,987507727&fm=26&gp=0.jpg",Price:"5.00",Desc:""},
            {ID:"3",TypeID:2,Num:"2",Name:"棒打鲜橙",Img:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=991671455,282499753&fm=26&gp=0.jpg",Price:"7.00",Desc:""},
            {ID:"4",TypeID:2,Num:"1",Name:"雪王大圣代",Img:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2084050122,4180399175&fm=26&gp=0.jpg",Price:"7.00",Desc:""},
            {ID:"5",TypeID:2,Num:"4",Name:"草莓瑶瑶奶昔",Img:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=148412814,3874787436&fm=11&gp=0.jpg",Price:"7.00",Desc:""},
            {ID:"6",TypeID:2,Num:"1",Name:"摩天脆脆",Img:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3129925081,2371384046&fm=26&gp=0.jpg",Price:"7.00",Desc:""},
            {ID:"7",TypeID:2,Num:"4",Name:"雪顶咖啡",Img:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1772589204,2186918377&fm=26&gp=0.jpg",Price:"7.00",Desc:""},
            {ID:"8",TypeID:2,Num:"2",Name:"冰淇淋红茶",Img:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=617568736,1188309860&fm=26&gp=0.jpg",Price:"7.00",Desc:""},
            {ID:"9",TypeID:3,Num:"1",Name:"杨枝甘露",Img:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1264593743,97991590&fm=26&gp=0.jpg",Price:"7.00",Desc:""},
            {ID:"10",TypeID:4,Num:"1",Name:"凤梨四季香",Img:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2062707419,3900706498&fm=26&gp=0.jpg",Price:"7.00",Desc:""},
        ];
    },
    //获取进行中订单
    GetOrderProgress:function(){
        return [
            {ID:"1",TypeID:1,Num:"1",Name:"冰鲜柠檬水",Img:"http://img1.imgtn.bdimg.com/it/u=1163923359,153178474&fm=26&gp=0.jpg",Price:"7.00",Desc:"暂不支持外卖"},
            {ID:"2",TypeID:1,Num:"3",Name:"满杯百香果",Img:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1809680878,987507727&fm=26&gp=0.jpg",Price:"5.00",Desc:""},
            {ID:"10",TypeID:4,Num:"1",Name:"凤梨四季香",Img:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2062707419,3900706498&fm=26&gp=0.jpg",Price:"7.00",Desc:""},
        ];
    },
    //banner图
    GetBanner:function(){
        return [
            {Href:"javascript:void(0)",Img:"http://img4.imgtn.bdimg.com/it/u=3017567867,2020029051&fm=26&gp=0.jpg"},
            {Href:"javascript:void(0)",Img:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1221209201,2172390439&fm=26&gp=0.jpg"},
            {Href:"javascript:void(0)",Img:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=928790305,4192647361&fm=11&gp=0.jpg"},
            {Href:"javascript:void(0)",Img:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1811677031,1728040318&fm=26&gp=0.jpg"},
        ];
    },
    Submit:function(data){
        
    },
    //检查数据更新，根据本地数据版本，和服务器数据版本进行对比
    CheckUpdate:function(){

    }

}