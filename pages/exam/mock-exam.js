// mock-exam.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    state: { a: 'un', b: 'un', c: 'un', d: 'un' },
    answer: 'a',
    chose:false
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
  // onShareAppMessage: function () {
  
  // },
  //选项处理
  chooseOption: function (e) {
    if(this.data.chose){

    }else{
      var op = e.currentTarget.dataset.op;
      var st = this.data.state;
      if (op == this.data.answer) {
        st[op] = 'r';
      } else {
        st[op] = 'w';
        st[this.data.answer] = 'r';
      }
      this.setData({
        state: st,
        chose:true
      })
    }
   
  },
  navtoresult:function(){
    wx.navigateTo({
      url: 'mock-bad-unfinish',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})