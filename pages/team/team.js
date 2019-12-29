// pages/team/team.js


var dota2 = require('../../data/dotarank.js')
var lol = require('../../data/lolrank.js')
var csgo = require('../../data/csgorank.js')


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
    currentGame: 'dota2'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.setData({
      teamRankInfo: dota2.teamrank
    })
  },

  jSelectClick(e){
    // console.log(e)
    const index = e.detail.index
    switch(index){
      case  0:
        this.setData({
          teamRankInfo: dota2.teamrank
        })
        break
      case  1 :
        this.setData({
          teamRankInfo: lol.teamrank
        })
        break
      case  2 :
        this.setData({
          teamRankInfo: csgo.teamrank
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