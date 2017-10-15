// need-to-know.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: [{ q: '这是一个问题哈哈哈哈哈哈哈哈哈哈哈哈例子', a: '这是答案哈哈哈哈哈哈哈哈哈哈哈', open: true }, 
    { q: '这是一个问题哈哈哈哈哈哈哈哈哈哈哈哈例子', a: '这是答案哈哈哈哈哈哈哈哈哈哈哈', open: false },
    { q: '这是一个问题哈哈哈哈哈哈哈哈哈哈哈哈例子', a: '这是答案哈哈哈哈哈哈哈哈哈哈哈', open: false },
    { q: '这是一个问题哈哈哈哈哈哈哈哈哈哈哈哈例子', a: '这是答案哈哈哈哈哈哈哈哈哈哈哈', open: false },
    { q: '这是一个问题哈哈哈哈哈哈哈哈哈哈哈哈例子', a: '这是答案哈哈哈哈哈哈哈哈哈哈哈', open: false },
    { q: '这是一个问题哈哈哈哈哈哈哈哈哈哈哈哈例子', a: '这是答案哈哈哈哈哈哈哈哈哈哈哈', open: false },
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
  onTapOpen:function(e){
    console.log(e);
    var idx = e.currentTarget.dataset.indx;
    var list = this.data.dataList;
    console.log(list);
    if(list[idx].open==false){
      list.map((item, index) => { item.open = false });
      list[idx].open = true;
      this.setData({
        dataList:list
      })
    }else{

    }
    
  }
})