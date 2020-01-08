// pages/first/first.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var _self = this
    wx.request({
      url: "http://172.17.150.251:8080/as.json",
      success: function (qum) {
        _self.setData({
          heloi: qum.data.page,
        })
      }
    })


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //   this.setData({
    //     color0:'rgb(80, 80, 150)',
    // })
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


  showNextPage: function (e) {
    var app = getApp()
    var url = e.currentTarget.setData.id
    app.setData({
      nexturl:url
    })
    wx.navigateTo({
      url: "/pages/aitrcle/aitrcle",
      success: function () {
        console.log("success!");
        console.log(app.getApp.data.nexturl)
      },
      fail: function () { console.log("faild!!!") },
    })
  }
})