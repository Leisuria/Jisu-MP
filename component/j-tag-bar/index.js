// component/j-tag-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tagInfo: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemClick(e){
      // console.log(e)
      const index = e.currentTarget.dataset.index
      this.setData({
        currentIndex : index 
      })
    }
  }
})
