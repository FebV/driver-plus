// practice-reservation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //type表示被选中，text表示剩余可预约的数量
    listData: [
      { "time": ["08:20","09:20"], "text": [1,1,2,1,4,0,0], "type": [0,0,0,0,1,0,0] },
      { "time": ["08:20","09:20"], "text": [1,1,2,1,4,0,0], "type": [0,0,0,0,0,0,0] },
      { "time": ["08:20","09:20"], "text": [1,1,2,1,4,0,0], "type": [0,0,0,0,0,0,0] },
      { "time": ["08:20","09:20"], "text": [1,0,2,1,4,0,0], "type": [0,0,0,0,0,0,0] },
      { "time": ["08:20","09:20"], "text": [1,1,2,1,4,0,0], "type": [0,0,0,0,0,0,0] }
      
    ],
    kemu:1,
    alertOpen:false
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
    var tarIndx = e.currentTarget.dataset.indx;//时间段
    var tarDay = e.currentTarget.dataset.day;//第几天
    var list = this.data.listData;
   
    if (list[tarIndx].text[tarDay]==0){
      this.fullReservation();
    } else if (list[tarIndx].text[tarDay] !== 0 && list[tarIndx].type[tarDay] == 0){
      this.reservationClass();
    } else if (list[tarIndx].text[tarDay] !== 0 && list[tarIndx].type[tarDay] == 1){
      this.cancelReservation();
    }
    

    if (list[tarIndx].type[tarDay] == 1) {
      list[tarIndx].type[tarDay] = 0;
    } else {
      list[tarIndx].type[tarDay] = 1;
    }
    
    this.setData({
      listData:list,
     
    })
   
    
  },
  //科目一科目四转换
  setKemu:function(e){
    var kemuu = e.currentTarget.dataset.kemu;
   var datakemu = this.data.kemu;
 
   console.log(kemuu != datakemu);
   if(kemuu!=datakemu){
     this.setData({
       kemu:kemuu
     })
   }
   
  },
  navToSuccess:function(){
    wx.navigateTo({
      url: 'reservation-success',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  navToComment:function(){
    wx.navigateTo({
      url: 'comment-coach',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
//预约课程
reservationClass:function(){
  var that = this;
  wx.showModal({
    title: '预约课程',
    content: '9月1日08:20-09:20',
    success: function (res) {
      if (res.confirm) {
        console.log("确认");
        that.navToSuccess();
      } else {
        console.log("cancel")
      }
    }
  })
},

  // 取消预约
  cancelReservation:function(){
    wx.showModal({
      title: '取消课程',
      content: '9月1日08:20-09:20',
      success:function(res){
        if(res.confirm){
          console.log("确认")
        }else{
          console.log("cancel")
        }
      }
    })
  },
  // 初级学员不可预约
  unableReservation:function(){
    wx.showModal({
      title: '温馨提示',
      content: '教练设置“初级”学员不可预约',
      success: function (res) {
        if (res.confirm) {
          console.log("确认")
        } 
      },
      showCancel:false,
    })
  },
  // 课程预约已满
  fullReservation:function(){
    wx.showModal({
      title: '温馨提示',
      content: '您来晚了！课程已经约满！',
      success: function (res) {
        if (res.confirm) {
          console.log("确认")
        }
      },
      showCancel: false,
    })
  },
  // 已过预约时间
  timeOutReservation:function(){
    wx.showModal({
      title: '温馨提示',
      content: '课程已过可预约时间 ',
      success: function (res) {
        if (res.confirm) {
          console.log("确认")
        }
      },
      showCancel: false,
    })
  }
})