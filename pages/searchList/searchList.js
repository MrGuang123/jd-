
var app = getApp();

var hotWord = ['手机','女装','男鞋','羽绒服女','男装','羽绒服','女鞋','毛呢大衣女','连衣裙','电视','羽绒服男','女靴'];

Page({
    data:{
        searchContent:undefined,
        hotWord:hotWord
    },
    onLoad:function(){
        wx.setNavigationBarTitle({
            title:'搜索'
        })
        wx.showNavigationBarLoading();
        setTimeout(function(){
            wx.hideNavigationBarLoading();
        },1000);
    },
    search:function(event){
        var value = event.detail.value;
        console.log(event)
        console.log(value)

        if(event.target.id === '搜索'){

            this.setData({
                searchContent:undefined
            })
            return {
                value:''    
            }
        }else if(event.target.id === '取消'){

            this.setData({
                searchContent:undefined
            })
            return {
                value:''    
            }
        }
    },
    keyinput:function(event){
        this.setData({
            searchContent:event.detail.value
        })
    }

})