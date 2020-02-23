import React, { Component } from 'react'

export default class TodoList extends Component {
  render() {
    return (
      <li>
        {this.props.title} {this.props.isCompleted? '完成' : '未完成'}
      </li>
    )
  }
}
