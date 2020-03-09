Page({
  data: {
    foods: [
      "红烧肉", "清蒸鱼", "麻婆豆腐", "火锅",
      "黄焖鸡",
      "酸菜鱼",
      "红烧肉",
      "大漠风沙鸡",
      "称心鱼条",
      "大红烤肉",
      "相敬虾饼",
      "香酥花仁",
      "菠罗生炒骨",
      "炒猪肚",
      "黄凉粉",
      "椒麻杏鲍菇",
      "海味时蔬",
      "鸳鸯鸡",
      "八宝饭",
      "炸榴连卷",
      "上汤白果猪肚",
      "蒜蓉蒸龙虾",
      "鲜百合芦笋",
      "干贝芋头糕"
    ],
    food: "什么",
    run: null,
    content: "开始",
    isStart: false
  },
  changeFood() {
    // console.log("click")
    this.data.isStart = !this.data.isStart
    console.log(this.data.isStart)

    if (this.data.isStart) {
      this.setData({
        content: "暂停",
        run: setInterval(() => {
          this.setData({
            food: this.data.foods[Math.floor(Math.random() * 23)]
            // console.log(this.data.food)
          })
          // this.data.food = this.data.foods[Math.floor(Math.random() * 3)]
          // console.log(this.data.food)
        }, 80)
      })



    } else {
      this.setData({
        content: "不行换一个!",

      })
      clearInterval(this.data.run)
      this.data.run = null

    }
  }
})