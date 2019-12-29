// pages/tournament/tournament.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabCate: ['DOTA2','LOL','CS:GO'],
    tagInfo: ['全部赛事','全球性','五大联赛','地区联赛','市区联赛 ','其他赛事'],
    leagueInfo: [
      {
        name: "S9全球总决赛",
        time: "01/01-12/31",
        img:"/images/tournament.png",
        state: "进行中",
        desc: "今日1场比赛"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  jSelectClick(e){
    const index = e.detail.index
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