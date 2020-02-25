import React, { Component } from 'react'

export default class TodoList extends Component {
  handleCheckboxChange=()=>{
    // console.log('复选框事件');
    this.props.onCompletedChange(this.props.id)
  }
  render() {
    return (
      <li>
        <input
          checked={this.props.isCompleted}
          onChange={this.handleCheckboxChange}
          type="checkbox"
        />
        <span>{this.props.title} {this.props.isCompleted? '完成' : '未完成'}</span>
      </li>
    )
  }
}
