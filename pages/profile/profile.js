// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{

    },
    profileList:[
      {
        img: "/icons/profile/grzl.png",
        name: "个人资料"
      },
      {
        img: "/icons/profile/yqhy.png",
        name: "邀请好友"
      },
      {
        img: "/icons/profile/gywm.png",
        name: "关于我们"
      },
      {
        img: "/icons/profile/bzfk.png",
        name: "帮助与反馈"
      },
      {
        img: "/icons/profile/szzx.png",
        name: "设置中心"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  // 事件处理函数
  handleGetUserInfo(e){
    // console.log(e)
    const {userInfo} = e.detail
    wx.setStorageSync("userinfo", userInfo)
    wx.getStorageSync("userinfo")
    this.setData({userInfo})
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