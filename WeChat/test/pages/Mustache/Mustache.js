Page({

  /**
   * 页面的初始数据
   */
  data: {
    isActive:false,
    nowDate : new Date().toLocaleString(),
    score: 50,
    movies:['盗梦空间','大话西游','七宗罪']
  },
  handleSwitchColor(){
    console.log("-----------")
    this.setData({
      isActive: !this.data.isActive
      
    })
  },
  onLoad(){
    setInterval(()=>{
      this.setData({
        nowDate: new Date().toLocaleString()
      })
    },1000)
  },
  handleIncrement(){
    if (this.data.score<100){
      this.setData({
        score: this.data.score + 6
      })
    }else{
      this.setData({
        score: 100
      })
    }
    
  }

})