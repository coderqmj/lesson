import React from 'react'
import {render} from "react-dom"
// import classNames from 'classnames's
// import styled from 'styled-components'
// import {TodoList,TodoItem} from './components'
import App from './App'

import './index.css'

// const Title = styled.h1`
//   color:red
// `

// const Header = ()=> <h1>调用的Header</h1>
//第二种继承类的方式创建模板
// class App extends Component{
//   render(){
//     return(
//       <div>
//         <TodoList/>
//         <TodoItem/>
//       </div> 
//     )
//   }
// }
render(
  <App/>,
  document.querySelector("#root")
)

