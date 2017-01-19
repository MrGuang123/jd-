//index.js

// 需要的数据
var discountData = [
      {
        total:5,
        condition:100,
        des:'全品类(特例商品除外)'
      },
      {
        total:10,
        condition:11,
        des:'仅可购买自营服饰全品类等等'
      },
      {
        total:80,
        condition:199,
        des:'仅可购买京东自营男包、等等'
      },
      {
        total:100,
        condition:199,
        des:'仅可购买自营晨光文具部门'
      },
    ];


//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World!!!!!',
    userInfo: {},
    discountData:discountData
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../myOrder/myOrder'
    })
  },
  search:function(){
    wx.navigateTo({
      url:'../searchList/searchList'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  //分享函数
  onShareAppMessage:function(){
    return {
      title:'仿制京东',
      desc:'一个练习小程序的demo',
      path:'/pages/searchGoods'
    }
  }
})
