//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  navToFreeToTry: function() {
    wx.navigateTo({
      url: '../free-to-try/free-to-try',
    })
  },
  navToGroupSignOnIntro: function () {
    wx.navigateTo({
      url: '../group-signon-intro/group-signon-intro',
    })
  },
  navToCommonClass: function() {
    wx.navigateTo({
      url: '../common-class/common-class',
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
  onShareAppMessage:function(){
    
  }
})
