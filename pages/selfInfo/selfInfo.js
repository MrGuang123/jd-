//logs.js
var util = require('../../utils/util.js');

var app = getApp();

var orderData = [
  {
    orderIconUrl:'../../img/pause.png',
    navUrl:'/pages/myOrder/myOrder',
    name:'全部订单'
  },
  {
    orderIconUrl:'../../img/play.png',
    navUrl:'/pages/myOrder/myOrder',
    name:'代付款'
  },
  {
    orderIconUrl:'../../img/plus.png',
    navUrl:'/pages/myOrder/myOrder',
    name:'代收款'
  },
  {
    orderIconUrl:'../../img/record.png',
    navUrl:'/pages/selfInfo/selfInfo',
    name:'售后订单'
  },
]

Page({
  data: {
    logs: [],
    userInfo:{},
    orderData:orderData,
    dialogFlag:false
  },
  directHandle:function(event){
    console.log(event)
    if(event.target.id === '3'){
      this.setData({
        dialogFlag:true
      })
    }
  },
  dialogCancel:function(){
    this.setData({
        dialogFlag:false
      })
  },
  showDialog:function(){
    // wx.showModal({
    //   // title: '提示',
    //   content: '这是一个模态弹窗',
    //   showCancel:false,
    //   confirmText:'知道了',
    //   confirmColor:'#cd3149',
    //   success: function(res) {
    //     if (res.confirm) {
    //       console.log('用户点击确定')
    //     }
    //   }
    // })

    // wx.showActionSheet({
    //   itemList: ['A', 'B', 'C'],
    //   success: function(res) {
    //     console.log(res.tapIndex)
    //   },
    //   fail: function(res) {
    //     console.log(res.errMsg)
    //   }
    // })

    // wx.showToast({
    //   title: '加载中',
    //   icon: 'loading',
    //   duration: 1000
    // })
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '我的订单'
    })
    //调用全局的方法获取用户信息
    var that = this;
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
    console.log(this.data.userInfo)
  }
})