// comment-coach.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    score:[0,0,0,0,0]
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
  changeScore:function(e){
    var score = e.currentTarget.dataset.score;
    var s = this.data.score;
    for(var i = 0;i<s.length;i++){
      s[i] = 0;
    }
    for(var j = 0;j<score;j++){
      s[j] = 1;
    }
    // console.log(s);
    this.setData({
      score:s
    })
  },
  subcomment:function(){
    wx.navigateBack({
      delta: 1,
    })
  }
})