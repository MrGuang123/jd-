var tabData = ['待使用','已过期','已使用'];

Page({
  data: {
    tabData:tabData,
    currentId:0
  },
  onLoad:function(data){
    this.setData({
      currentId:data.id
    })
  },
  tabTap:function(event){
    console.log(event.target.id)
    this.setData({
      currentId:event.target.id
    })
  },
  goToHome:function(){
    console.log(111)
    wx.switchTab({
      url:'../searchGoods/searchGoods',
      success:function(){
        console.info('成功了')
      },
      fail:function(err){
        console.error(err);
      }
    })
  }
})


