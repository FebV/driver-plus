// mycoach.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:1,
    name:"黄旭东"
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
  clickNum:function(e){
    console.log(e.target.dataset.id);
    this.setData({
      num: e.target.dataset.id,
    })
  },
  coach:function(){
    wx.showModal({
      title: '',
      content: '确定选择'+this.data.name+'为你的教练吗 ',
      success: function (res) {
        if (res.confirm) {
          console.log("确认");
          wx.navigateTo({
            url: 'confirmCoach',
          })
        }
      },
      showCancel: true,
    })

  }
})