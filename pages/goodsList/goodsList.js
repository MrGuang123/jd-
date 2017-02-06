
var app = getApp();

var data1 = [
    {
        imgSrc:'../../img/icon_API.png',
        isSelf:true,
        title:'联想（ThinkPad）轻薄系列，l思考的风景深蓝色地方速度快地方乐山大佛了空间发的 苏打绿可金福',
        money:'6588.00',
        evaluate:'86432',
        praise:'94'
    },
    {
        imgSrc:'../../img/icon_API.png',
        isSelf:true,
        title:'华为（荣耀）轻薄系列，l思考的风景深蓝色地方速度快地方乐山大佛了空间发的 苏打绿可金福',
        money:'5588.00',
        evaluate:'86432',
        praise:'94'
    },
    {
        imgSrc:'../../img/icon_API.png',
        isSelf:true,
        title:'小米（红米）轻薄系列，l思考的风景深蓝色地方速度快地方乐山大佛了空间发的 苏打绿可金福',
        money:'3538.00',
        evaluate:'86432',
        praise:'94'
    },
    {
        imgSrc:'../../img/icon_API.png',
        isSelf:true,
        title:'OPPO（随机）轻薄系列，l思考的风景深蓝色地方速度快地方乐山大佛了空间发的 苏打绿可金福',
        money:'6588.00',
        evaluate:'86432',
        praise:'94'
    }
]

var filterData = ['综合','销量','价格','筛选'];

Page({
    data:{
        searchKey:'笔记本电脑',
        select:'综合',
        firstData:data1,
        filterData:filterData
    },
    onLoad:function(){
        console.log(app.globalData.searchKeyword)
        this.setData({
            searchKey:app.globalData.searchKeyword
        })
        console.log(this.data.searchKey)
    },
    select:function(event){
        console.log(event.currentTarget.dataset.id)
        this.setData({
            select:event.currentTarget.dataset.id
        })
    }
})