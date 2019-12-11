Page({
  /**
   * 页面的初始数据
   */
  data: {
    imagePath: ''
  },
  handleChooseAlbum(){
    const now = this;
    wx.chooseImage({
      success: function(res) {
        // console.log(res)
        //1.取出路径
        const path = res.tempFilePaths[0];
        //2.设置路径
        now.setData({
          imagePath:path
        })
      },
    })
  }
})