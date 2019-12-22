const userUtils = require('../../utils/users.js');
Page({

  commitAccount(e) {
    let values = e.detail.value;
    let {username,password} = values;
    // console.log(values);
    if (!username.replace(/\s+/g, '')){
      wx.showToast({
        title: '请输入用户名',
        icon:'none'
      })
      return;
    }
    if (!password.replace(/\s+/g,'')) {
      wx.showToast({
        title: '请输入密码',
        icon: 'none'
      })
      return;
    }
    const token = this.getToken(username,password)
    console.log(token);
    this.login(token);
  },
  login(token){
    wx.showLoading({
      title: '正在登录',
      // icon:'none'
    })
    //将界面跟网络请求分开，有利于维护，请求放入Utils
    userUtils
      .signIn(token)
      .then((data)=>{
        console.log(data);
        wx.showToast({
          title: '登录成功',
          icon: 'none'
        })
      })
  },
  getToken(username,password){
    const str = username + ':' + password
    return 'Basic ' + wx.arrayBufferToBase64(new Uint8Array([...str].map(char => char.charCodeAt(0))))

  }
})
