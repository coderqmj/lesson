import React, { Component } from 'react'

export default class Like extends Component {
  constructor(){
    super()
    this.state = {
      isLike:false
    }
  }
  handLikeClick = () =>{
    // this.setState({
    //   isLike : !this.state.isLike
    // })
    this.setState((preState)=>{
      return {
        isLike:!preState.isLike
      }
    },()=>{
      //由于是异步操作的，最新的state在这里面获取
      console.log(this.state.isLike);
    })
    console.log('状态为'+this.state.isLike);
  }
  render() {
    return (
      <div>
        <span onClick={this.handLikeClick}>
        {
          this.state.isLike? '取消 ❤️' : '喜欢 🖤'
        }
        </span>
      </div>
    )
  }
}
