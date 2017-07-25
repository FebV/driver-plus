// practice-test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderList:[1,0],
    state:{a:'un',b:'un',c:'un',d:'un'},
    answer:'a',
    chose: false
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
  changeOrderList:function(e){
    var indx = e.currentTarget.dataset.indx;
    var list = this.data.orderList;
    for (var i = 0; i < list.length; i++) {
      list[i] = 0;
    }
    console.log(indx);
    list[indx] = 1;
    this.setData({
      orderList: list
    });
    var st = this.data.state;
    if(list[1]==1){
      st.a ='un';
      st.b = 'un'
      st.c = 'un'
      st.d = 'un'
      
      // console.log(this.data);
      st[this.data.answer] = 'r';
    }
    this.setData({
      state: st
    })
  },


  //选项处理
  chooseOption:function(e){
    if(this.data.chose){

    }else{
      if (this.data.orderList[1] == 1) {

      } else {
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
    }
    
    
  }
})