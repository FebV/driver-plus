// process.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:1,
    leftleft:'252rpx',
    rightleft:"126rpx"
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
    console.log(e.target.dataset.num)
    switch(e.target.dataset.num){
      case '1':
      console.log(1)
        this.setData({
          leftleft: '252rpx',
          rightleft: "126rpx"
        })
        break;
      case '2':
        console.log(1)
        this.setData({
          leftleft: '126rpx',
          rightleft: "251rpx"
        })
        break;
      case '3':
        this.setData({
          leftleft: '251rpx',
          rightleft: "376rpx"
        })
        break;
      case '4':
        this.setData({
          leftleft: '376rpx',
          rightleft: "501rpx"
        })
        break;
      case '5':
        this.setData({
          leftleft: '501rpx',
          rightleft: "626rpx"
        })
        break;
      case '6':
        this.setData({
          leftleft: '626rpx',
          rightleft: "720rpx"
        })
        break;
    }
    this.setData({
      num:e.target.dataset.num,
    })
  }
})