import React, { Component } from 'react'
import {TodoInput,TodoItem,Header} from './components'

export default class App extends Component {
  constructor(){
     super()
     this.state = {
       title:'待办事项列表',
       desc:'今日事，今日毕',
       article:'<div>你好啊，吃了吗？</div>',
       todos:[
         {
           id:1,
           title:'吃饭',
           whio:'qiu',
           isCompleted:true
         },
         {
           id:2,
           title:'睡觉',
           who:'mo',
           isCompleted:false
         }
       ]
     }
  }
  render() {
    return (
      <>
        <Header desc={this.state.desc}>
          <i>{this.state.title}</i>
        </Header>  
        <TodoInput />
        <TodoItem todos={this.state.todos} /> 
        {/* {
          this.state.todos.map(todo=>{
          return <div key={todo.id}>{todo.title}</div>
          })
        }
        {
          <div dangerouslySetInnerHTML={{__html:this.state.article}} />
        } */}
      </>
    )
  }
}
