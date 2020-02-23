import React, { Component } from 'react'
import TodoList from './TodoList'

export default class TodoItem extends Component {
  render() {
    console.log(this.props);
    return (
      <ul>
        {
          this.props.todos.map(todo => {
            return (
              <TodoList 
                key={todo.id}
                {...todo}
                // id={todo.id}
                // title={todo.title}
                // isCompleted = {todo.isCompleted}
                
              />
            )
          })
        }
      </ul>
    )
  }
}
