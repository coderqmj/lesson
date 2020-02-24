import React, { Component } from 'react'
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
  }
  handleInputChange = (event) =>{
    // console.log(event.currentTarget.value);
    this.setState({
      inputValue:event.currentTarget.value
    })
  }
  handleClick = () =>{
      // console.log(this.state);
      this.props.addTodo(this.state.inputValue)
  }
  render() {
    return (
      <div>
        <input 
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          onKeyUp={this.handleClick}
        />
        <button onClick={this.handleClick}>{this.props.btnText}</button>
      </div>
    )
  }
}
