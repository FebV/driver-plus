// myorder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderList:[1,0,0,0]
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
  //取消订单
  cancelOrder:function(){
    wx.showModal({
      title: '',
      content: '确定取消订单吗？',
      showCancel: true,
      cancelText: '取消',
      confirmText: '确定',
      success: function(res) {
        if(res.confirm){

        }else{

        }
      },
    })
  },
  //线下支付
  offLine:function(){
    wx.showModal({
      title: '',
      content: '请确保已经与驾校工作人员完成线下支付前的沟通，以便工作人员进行财务审核，点击确定将提交线下支付请求！确定线下支付吗？',
      showCancel: true,
      cancelText: '取消',
      confirmText: '确定',
      success: function(res) {
       if(res.confirm){
        wx.navigateTo({
          url: 'offline-order',
          success: function(res) {},
          fail: function(res) {},
          complete: function(res) {},
        })
       } else{

       }
      
      },
    })
  },
  changeOrderList:function(e){
    var indx = e.currentTarget.dataset.indx;
    var list = this.data.orderList;
    for(var i =0;i<list.length;i++){
      list[i] = 0;
    }
    console.log(indx);
    list[indx] = 1;
    this.setData({
      orderList:list
    })
  }
})