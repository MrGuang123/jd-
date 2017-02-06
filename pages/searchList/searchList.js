
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

        if(event.target.id === '搜索'){

            // app.setData({
            //     searchKeyword:this.data.searchContent
            // })
            app.globalData.searchKeyword = this.data.searchContent;
            console.log(app.globalData.searchKeyword)
            this.setData({
                searchContent:undefined
            })
            wx.redirectTo({
                url:"../goodsList/goodsList"
            })
        }else if(event.target.id === '取消'){

            this.setData({
                searchContent:undefined
            })
            wx.navigateBack({
                delta: 2
            })
        }
    },
    keyinput:function(event){
        this.setData({
            searchContent:event.detail.value
        })
    }

})