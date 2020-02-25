import React, { Component } from 'react'
import TodoList from './TodoList'
import PropTypes from 'prop-types'



export default class TodoItem extends Component {
  static propTypes = {
    todos:PropTypes.arrayOf(PropTypes.shape({
      id:PropTypes.number.isRequired,
      title:PropTypes.string.isRequired,
      isCompleted:PropTypes.bool.isRequired,
    })).isRequired,
    onCompletedChange:PropTypes.func
  }

  render() {
    // console.log(this.props);
    return (
      <ul>
        {
          this.props.todos.map(todo => {
            return (
              <TodoList 
                key={todo.id}
                {...todo}
                onCompletedChange={this.props.onCompletedChange}
                
              />
            )
          })
        }
      </ul>
    )
  }
}
