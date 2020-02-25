import React, { Component, createRef } from 'react'
import propTypes from 'prop-types'

export default class TodoInput extends Component {
  static defaultProps = {
    btnText:'添加'
  }
  static propTypes = {
    btnText:propTypes.string
  }
  constructor(){
    super()
    this.state={
      inputValue:''
    }
    this.inputDom = createRef()
  }
  handleInputChange = (event) =>{
    // console.log(event.currentTarget.value);
    this.setState({
      inputValue:event.currentTarget.value
    })
  }
  handleKeyUp = (event)=>{
    if(event.keyCode===13){
      console.log('nihao');
      this.handleClick()  
    }
  }
  handleClick = () =>{
    if(this.state.inputValue){
      this.props.addTodo(this.state.inputValue)
      this.setState({
        inputValue:''
      },()=>{
        this.inputDom.current.focus()
      })
    }  
  }
  render() {
    return (
      <div>
        <input 
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          onKeyUp={this.handleKeyUp}
          ref={this.inputDom}
        />
        <button onClick={this.handleClick}>{this.props.btnText}</button>
      </div>
    )
  }
}
