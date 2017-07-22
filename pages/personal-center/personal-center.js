// personal-center.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    motto: 'Hello World',
    userInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      console.log(userInfo);
      that.setData({
        userInfo: userInfo
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  login: function() {
    // wx.login({
    //   success: function (res) {
    //     if (res.code) {
    //       //发起网络请求
    //       console.log(res);
    //     } else {
    //       console.log('获取用户登录态失败！' + res.errMsg)
    //     }
    //   }
    // });
    wx.navigateTo({
      url: '../login/login',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  navtoMyCoach:function(){
    wx.navigateTo({
      url: '../mycoach/mycoach',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  navtoMyOrder: function () {
    wx.navigateTo({
      url: '../myorder/myorder',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  navtoProcess: function () {
    wx.navigateTo({
      url: '../process/process',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  navtoSmartBus: function () {
    wx.navigateTo({
      url: '../smart-bus/smart-bus',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }
})