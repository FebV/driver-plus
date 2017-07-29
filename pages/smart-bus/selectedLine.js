
Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftList: false,
    List: false,
    rightList: false,
    leftStation: "山东大学中心校区",
    rightStation: "路舜驾校",
    line: "选择线路",
    leftLine: "选择班次",
    rightLine: "选择我的站点",
    listLine: ["111111", '22222', '33333'],
    leftListLine: ['1111班次', '2222班次', '333班次'],
    rightListLine: ['222222站点', '3333站点', '4444站点'],
    station: ["山东大学中心校区", "222222222222", "3333", "444", '路舜驾校'],
    myStationTop:"0rpx",
    carTop:"282rpx"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
        line:options.line
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
  showLeftList: function () {
    if (this.data.line == "选择线路") {

      wx.showModal({
        title: '温馨提示',
        content: '请先“选择路线”，再“选择班次”',
        success: function (res) {
          if (res.confirm) {
            console.log("确认")
          }
        },
        showCancel: false,
      })
    } else {
      var leftlist = this.data.leftList;
      this.setData({
        leftList: !leftlist,
      })
    }

  },
  showList: function () {
    var list = this.data.List;
    this.setData({
      List: !list,
    })
  },
  showRightList: function () {
    if (this.data.line == "选择线路") {
      wx.showModal({
        title: '温馨提示',
        content: '请先“选择路线”、“选择班次”，再“选择我的站点”！',
        success: function (res) {
          if (res.confirm) {
            console.log("确认")
          }
        },
        showCancel: false,
      })
    } else if (this.data.leftLine == "选择班次") {
      wx.showModal({
        title: '温馨提示',
        content: '请先“选择班次”，再“选择我的站点”！',
        success: function (res) {
          if (res.confirm) {
            console.log("确认")
          }
        },
        showCancel: false,
      })
    }
    else {
      var rightList = this.data.rightList;
      this.setData({
        rightList: !rightList,
      })
    }

  },
  changeStation: function () {
    var temp = "";

    temp = this.data.leftStation;
    var left = this.data.rightStation;
    var right = temp;

    this.setData({
      leftStation: left,
      rightStation: right,
      station: this.data.station.reverse()
    })

  },
  changeLine: function (e) {


    var list = this.data.List;
    this.setData({
      line: this.data.listLine[e.target.dataset.id],
      List: !list,
    })
  },
  changeLeftLine: function (e) {

    var leftlist = this.data.leftList;
    this.setData({
      leftLine: this.data.leftListLine[e.target.dataset.id],
      leftList: !leftlist,
    })

  },
  changeRightLine: function (e) {

    var rightList = this.data.rightList;
    this.setData({
      rightLine: this.data.rightListLine[e.target.dataset.id],
      rightList: !rightList,
      myStationTop: 375 + e.target.dataset.id*96+'rpx'
    })

  }



})