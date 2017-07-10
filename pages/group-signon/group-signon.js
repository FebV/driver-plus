
Page({

  /**
   * 页面的初始数据
   */
  data: {
    groundList: [
      {
        "name": "XXX训练场",
        "cover": "8万平方米",
        "number": "111",
        "onActive": "none",
      },
      {
        "name": "XXX训练场",
        "cover": "8万平方米",
        "number": "111",
        "onActive": "inline-block",
      }
    ],
    classType: 0,
    playGround: 1,
    introCode: null,
    forePaid: true,
    name: '',
    ID: null,
    phoneNumber: null,
    qqNumber: null,
    needZJZ: true,
    noID: false
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

  onChoosePlayGround: function (e) {
    var indx = e.currentTarget.dataset.key;

    // console.log(indx);
    var list = this.data.groundList;
    list.map((item, i) => { item.onActive = "none" });
    list[indx].onActive = "inline-block";
    this.setData({
      groundList: list
    })



  },
  onChangeState: function (e) {
    var ty = e.currentTarget.dataset.type;
    console.log(ty);
    var editType = this.data[ty];
    editType = !editType;
    var a = {}
    a[ty] = editType;
    this.setData(a)

  },
  changeClass: function (e) {
    var cur = e.currentTarget.dataset.class;
    if (this.data.classType == cur) {

    } else {
      this.setData({
        classType: cur
      })

    }
  }
})