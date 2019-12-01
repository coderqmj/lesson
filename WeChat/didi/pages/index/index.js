const app = getApp();
Page({
  data:{
    currentTab:3,
    navScrollLeft:100,
    navData:[
      // {
      //   id:1,
      //   name:'专车'
      // },
      // {
      //   id:2,
      //   name:'快车'
      // },
      // {
      //   id:3,
      //   name:'计程车'
      // }
    ]
  },
  showUser(){
    console.log(app);
    // 用户点击授权，显示用户信息，else 去登录
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },
  onLoad(){
    //请求数据
    wx.request({
      url:'http://localhost:1314/indexPage',
      success:(res)=>{
        // console.log(res);
        const navData = res.data.navData;
        this.setData({
          navData
        })
      }
    })
  },
  switchNav(e){
    const cur = e.currentTarget.dataset.current;
    // console.log(cur);
    this.setData({
      currentTab:cur
    })
  }
})