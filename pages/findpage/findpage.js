// pages/mypage/mypage.js
Page({

  /**
   * 页面的初始数据
   */

  data: {
    selected: 2,
    list: [
      {
          id: 1,
          imgUrl: 'https://mmbiz.qpic.cn/mmbiz_jpg/3j77EspfUMuJtUhuYQNTPNIFWOdicSxySmtgQQvPjpMNGzUPzCibSeGGuoKb9NOwO4B77icsImZZqrrlctFy7hiaNQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
          title: '特别活动',
          intro: '来领养一颗属于自己的果树',
          data: '活动日期：'
      },
      {
        id: 1,
        imgUrl: 'https://mmbiz.qpic.cn/mmbiz_jpg/3j77EspfUMuJtUhuYQNTPNIFWOdicSxySmtgQQvPjpMNGzUPzCibSeGGuoKb9NOwO4B77icsImZZqrrlctFy7hiaNQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
        title: '第零弹',
        intro: '多种好吃不贵原生态水果',
        data: '活动日期：'
      },
      {
        id: 1,
        imgUrl: 'https://mmbiz.qpic.cn/mmbiz_jpg/3j77EspfUMuJtUhuYQNTPNIFWOdicSxySmtgQQvPjpMNGzUPzCibSeGGuoKb9NOwO4B77icsImZZqrrlctFy7hiaNQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
        title: '第零弹',
        intro: '多种好吃不贵原生态水果',
        data: '活动日期：'
      },
      {
        id: 1,
        imgUrl: 'https://mmbiz.qpic.cn/mmbiz_jpg/3j77EspfUMuJtUhuYQNTPNIFWOdicSxySmtgQQvPjpMNGzUPzCibSeGGuoKb9NOwO4B77icsImZZqrrlctFy7hiaNQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
        title: '第零弹',
        intro: '多种好吃不贵原生态水果',
        data: '活动日期：'
      },
      {
        id: 1,
        imgUrl: 'https://mmbiz.qpic.cn/mmbiz_jpg/3j77EspfUMuJtUhuYQNTPNIFWOdicSxySmtgQQvPjpMNGzUPzCibSeGGuoKb9NOwO4B77icsImZZqrrlctFy7hiaNQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
        title: '第零弹',
        intro: '多种好吃不贵原生态水果',
        data: '活动日期：'
    }
  ],
  },
  jumpToDetail: function(e) {
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  },
  jumpToTree: function(e) {
    wx.navigateTo({
      url: '/pages/tree/tree',
    })
  },
  jumpToFruit: function(e) {
    wx.navigateTo({
      url: '/pages/fruit/fruit',
    })
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
  onShow: function(e) {

    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
    
            this.getTabBar().setData({
    
                            selected: 1
    
                        })
    
            }
    
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