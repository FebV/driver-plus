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
    
  },
  navtoNeedtoknow:function(){
    wx.navigateTo({
      url: '../need-to-know/need-to-know',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  navtoGround:function(){
    wx.navigateTo({
      url: '../ground-detail/ground-detail',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  navtoSchoolIntro:function(){
    wx.navigateTo({
      url: '../school-intro/school-intro',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})
