Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      pagePath: "/pages/home/home",
      iconPath: "/images/home.png",
      selectedIconPath: "/images/home.png",
      text: "主页"
    },  {
      pagePath: "/pages/shop/shop",
      iconPath: "/images/shopping.png",
      selectedIconPath: "/images/shopping.png",
      text: "购物"
    }, 
    {
      pagePath: "/pages/findpage/findpage",
      iconPath: "/images/collect.png",
      selectedIconPath: "/images/collect.png",
      text: "发现"
    }, 
    {
      pagePath: "/pages/mypage/mypage",
      iconPath: "/images/user.png",
      selectedIconPath: "/images/user.png",
      text: "我的"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      console.log(data)
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})