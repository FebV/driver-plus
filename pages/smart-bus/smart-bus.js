// smart-bus.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftList:false,
    List:false,
    rightList:false,
    leftStation:"山东大学中心校区",
    rightStation:"路舜驾校",
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
  showLeftList:function(){
    var leftlist = this.data.leftList;
    this.setData({
      leftList: !leftlist,
    })
  },
  showList:function(){
    var list=this.data.List;
    this.setData({
      List:!list,
    })
  },
  showRightList:function(){
    var rightList=this.data.rightList;
    this.setData({
      rightList:!rightList,
    })
  },
  changeStation:function(){
    var station="";
    console.log(1)
    station=this.data.leftStation;
    var left=this.data.rightStation;
    var right=station;
    console.log(left);
    console.log(right);
    this.setData({
      leftStation:left,
      rightStation:right
    })
    
  }

  
})