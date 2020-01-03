// pages/tournament/tournament.js
var dota2 = require('../../data/dotaevents.js')
var lol = require('../../data/lolevents.js')
var csgo = require('../../data/csgoevents.js')


Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabCate: ['DOTA2','LOL','CS:GO'],
    tagInfo: ['全部赛事','全球性','五大联赛','地区联赛','市区联赛 ','其他赛事'],
    eventsInfo: [
      {
        id: "",
        game_id: 1,
        title: "",
        start_time: 0,
        end_time: 0,
        logo: "/images/tournament.png",
        thumb: "/images/tournament_banner.png",
        status_id: 3,
        price: "",
        type: 0,
        location: "",
        matches_count: 0
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      eventsInfo: dota2.eventslist
    })
  },

  jSelectClick(e){
    // console.log(e)
    const index = e.detail.index
    switch(index){
      case  0:
        this.setData({
          eventsInfo: dota2.eventslist
        })
        break
      case  1 :
        this.setData({
          eventsInfo: lol.eventslist
        })
        break
      case  2 :
        this.setData({
          eventsInfo: csgo.eventslist
        })
        break  
    }
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