// practice-test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderList: [1, 0],
    curIndex: 0,
    multiChose: ['', '', '', ''],
    List: [{
      qtype: "单选题",
      state: { a: 'un', b: 'un', c: 'un', d: 'un' },
      answer: 'a',
      chose: false,
    },
    {
      qtype: "判断题",
      state: { a: 'un', b: 'un' },
      answer: 'b',
      chose: false,
    },
    {
      qtype: "多选题",
      state: { a: 'un', b: 'un', c: 'un', d: 'un' },
      answer: ['a', 'c'],
      chose: false,
    }
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
  // onShareAppMessage: function () {

  // },
  //模式处理
  changeOrderList: function (e) {
    var list = this.data.orderList;

    if (e) {
      var indx = e.currentTarget.dataset.indx;//模式
      for (var i = 0; i < list.length; i++) {
        list[i] = 0;
      }
      list[indx] = 1;
    }
    var ind = this.data.curIndex;//题号

    this.setData({
      orderList: list
    });
    var l = this.data.List;
    var st = this.data.List[ind].state;
    if (list[1] == 1) {
      st.a = 'un';
      st.b = 'un'
      st.c = 'un'
      st.d = 'un'

      // console.log(this.data);
      for (var j = 0; j < this.data.List[ind].answer.length; j++) {
        st[this.data.List[ind].answer[j]] = 'r';
      }

      l[ind].state = st;
      console.log(st);
      l[ind].chose = true;
    };

    this.setData({
      List: l
    })
  },


  //选项处理
  chooseOption: function (e) {
    var ind = this.data.curIndex;
    if (this.data.List[ind].chose) {

    } else {
      if (this.data.List[ind].qtype == '多选题') {
        if (this.data.orderList[1] == 1) {

        } else {
          var op = e.currentTarget.dataset.op;
          var l = this.data.List;
          var st = this.data.List[ind].state;
          var mc = this.data.multiChose;
          if (st[op] == 'ch') {
            st[op] = 'un';
            if (op == 'a') {
              mc[0] = '';
            } else if (op == 'b') {
              mc[1] = '';
            } else if (op == 'c') {
              mc[2] = '';
            } else if (op == 'd') {
              mc[3] = '';
            }
          } else {
            st[op] = 'ch';
            if (op == 'a') {
              mc[0] = 'a';
            } else if (op == 'b') {
              mc[1] = 'b';
            } else if (op == 'c') {
              mc[2] = 'c';
            } else if (op == 'd') {
              mc[3] = 'd';
            }
          }

          l[ind].state = st;

          this.setData({
            List: l,
            multiChose: mc
          });
           console.log(this.data.multiChose);
        }
      } else {
        if (this.data.List[ind].chose) {

        } else {
          if (this.data.orderList[1] == 1) {

          } else {
            var op = e.currentTarget.dataset.op;
            var l = this.data.List;
            var st = this.data.List[ind].state;

            if (op == this.data.List[ind].answer) {
              st[op] = 'r';
            } else {
              st[op] = 'w';
              st[this.data.List[ind].answer] = 'r';
            }
            l[ind].state = st;
            l[ind].chose = true;
            this.setData({
              List: l
            });
            // console.log(this.data.List);
          }
        }
      }



    }
  },
  changeIndex: function (e) {
    // console.log(e.detail);

    this.setData({
      curIndex: e.detail.current
    });
    this.changeOrderList();
  },
  confirmAnswer: function () {
    var len = 0;
    var mc = this.data.multiChose;
    for(var h = 0;h<4;h++){
      if (mc[h] == '') {
        continue;
      } else {
        len++;
      }
    }
    console.log(len);
    if(len<2){
      wx.showToast({
        title: '请选择至少两个选项',
        icon: 'loading',

        mask: true,
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    }else{

      var ind = this.data.curIndex;

      var l = this.data.List;
      var st = this.data.List[ind].state;

      for (var k = 0; k < 4; k++) {
        if (mc[k] == '') {
          continue;
        } else {


          if (l[ind].answer.indexOf(mc[k]) != -1) {
            st[mc[k]] = 'r';
          } else {
            st[mc[k]] = 'w';
          }
        }

      }
      for (var i = 0; i < l[ind].answer.length; i++) {
        st[l[ind].answer[i]] = 'r';
      }


      l[ind].state = st;
      console.log(len);
      l[ind].chose = true;
      this.setData({
        List: l,
        multiChose: ['', '', '', ''],
      });


    }
    
    
  }
})