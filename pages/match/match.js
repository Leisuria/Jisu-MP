// pages/match/match.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gameCate:['DOTA2','LOL','CS:GO'],
    tabCate:['全部','进行中','赛程','赛果','关注'],
    matchInfo: {
      leagueName: "联赛名称",
      time: "00:00",
      state: "未开始",
      audience: "0",
      awayTeam: "Away",
      homeTeam: "Home",
      teamIcon: "/images/team.png",
      score: "VS",
      stateImg: "/icons/match/stete-lol.png",
      round: "BO1"
    },
    currentGame: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  handleTabClick(e){
    const index = e.detail.index
    this.setData({
      currentIndex: index
    })
  },
  jSelectClick(e){
    // console.log(e)
    const index = e.detail.index
    this.setData({
      currentIndex: index
    })
  }
})