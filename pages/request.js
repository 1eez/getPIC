// pages/request.js
Page({
  data: {
    // text:"这是一个页面"
    result: []
  },

  onLoad: function () {
    var that = this;
    wx.request({
//      url: 'https://gank.io/api/data/%E7%A6%8F%E5%88%A9/1/1',
      url: 'https://image.baidu.com/channel/listjson?pn=0&rn=10&tag1=%E7%BE%8E%E5%A5%B3&tag2=%E5%85%A8%E9%83%A8&ie=utf8',
      method: 'GET',
      success: function (res) {
        that.setData({
          result: res.data.data

        })
      }

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
  
  }
})