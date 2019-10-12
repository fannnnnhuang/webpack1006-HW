import React from 'react'
import ReactDOM from 'react-dom'
import App from './compoents/counter'
import App2 from './compoents/card'
import App3 from './compoents/dark-mode-switch'

const MainScreen = () => <div className='alert'>
  <h3>計數器</h3>
  <App/>
  <App2 />
  <App3 />
</div>

// eslint-disable-next-line react/prop-types
// const Title = ({ text }) => <h5 className="text-bold">{text}</h5>

// const cartList = [
//  'text1', 'text2'
// ]

// eslint-disable-next-line no-unused-vars
// const Card = () => {
//  return (
//    <div>
//      {cartList.map((el, inx) => {
//       return <Title key ={inx} text={el} />
//     })
//     }
//     <Card2/>
//   </div>
// )
// }

// const Card2 = () => {
//  return <div>
//   <Title text={'我是測試'}/>
//  </div>
// }
// var Index = function Index () {
//  return React.createElement('div', {
//    className: 'helloworld'
//  }, 'Hello React,Webpack4,Babel7!')
// }
const rootElement = document.getElementById('root')
ReactDOM.render(<MainScreen />, rootElement)

// document.getElementById('root')
