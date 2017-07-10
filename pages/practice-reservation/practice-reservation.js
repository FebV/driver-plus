// practice-reservation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: [
      { "time": "06-09", "text": [1,1,2,1,4,0,0], "type": [0,0,0,0,0,0,0] },
      { "time": "11-12", "text": [1,1,2,1,4,0,0], "type": [0,0,0,0,0,0,0] },
      { "time": "15-16", "text": [1,1,2,1,4,0,0], "type": [0,0,0,0,0,0,0] },
      { "time": "17-18", "text": [1,0,2,1,4,0,0], "type": [0,0,0,0,0,0,0] },
      { "time": "18-19", "text": [1,1,2,1,4,0,0], "type": [0,0,0,0,0,0,0] }
      
    ]
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
  onPick:function(e){
    var tarIndx = e.currentTarget.dataset.indx;
    var tarDay = e.currentTarget.dataset.day;
    var list = this.data.listData;
    if (list[tarIndx].type[tarDay] == 1){
      list[tarIndx].type[tarDay] = 0;
    }else{
      list[tarIndx].type[tarDay] = 1;
    }
    
    
    this.setData({
      listData:list
    })
   
    
  }
})