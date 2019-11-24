Page({
  scanCode(){
    wx.scanCode({
      onlyFromCamera:true,
      scanType: ['barCode'],
      success: res => {
        let isbn = res.result;
        // isbn->到云里查询下
        // wx.cloud.callFunction去查询API
        wx.cloud.callFunction({
          name: 'bookinfo',
          data:{
            isbn:isbn
          },
          success: res=>{
            console.log(res.result);
          }
        })
        
      }
    })
  }
})