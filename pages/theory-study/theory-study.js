// theory-study.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    kemu: 1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  navtoPractice:function(){
    wx.navigateTo({
      url: '../exam/practice-test',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  navtoExam:function(){
    wx.navigateTo({
      url: '../exam/mock-exam',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  //科目一科目四转换
  setKemu: function (e) {
    var kemuu = e.currentTarget.dataset.kemu;
    var datakemu = this.data.kemu;

    console.log(kemuu != datakemu);
    if (kemuu != datakemu) {
      this.setData({
        kemu: kemuu
      })
    }

  },
})