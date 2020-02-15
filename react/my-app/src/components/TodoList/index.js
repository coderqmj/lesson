import React, { Component } from 'react'
import propTypes from 'prop-types'

export default class TodoList extends Component {
  static defaultProps = {
    btnText:'添加'
  }
  static propTypes = {
    btnText:propTypes.string
  }
  render() {
    return (
      <div>
        <input type="text" /><button>{this.props.btnText}</button>
      </div>
    )
  }
}
