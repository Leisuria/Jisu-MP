// pages/team/team.js


var dotarank = require('../../data/dotarank.js')
var lolrank = require('../../data/lolrank.js')
var csgorank = require('../../data/csgorank.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabCate: ['DOTA2','LOL','CS:GO'],
    teamRankInfo : [
      {
        position: 0,
        way: "-",
        logo: "/images/team-cir.png",
        name: "defult",
        country: {
          logo: "/images/map.png"
        },
        score: 0,
      }
    ],
    currentIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      teamRankInfo: dotarank.teamrank
    })
  },

  jSelectClick(e){
    console.log(e)
    const index = e.detail.index
    this.setData({
      currentIndex: index
    })
    console.log(currentIndex)
    
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