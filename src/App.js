import React from 'react'
import './App.css'
import './Style.css'
import Style from './Style.module.css'
import './Style.scss'

function App() {
  const headline = {
    color:"white",
    backgroundColor:"blue",
    fontStyle:"bold"
  }
  return (
    <div className='App'>
      <h1>Styling Css in react</h1>
      {/* Inline Css */}
      <h1 style={{color:"White",backgroundColor:"pink"}}>Inline Method</h1>

      <h1 className="primary">Normal Method</h1>

      <h1 style={headline}>CSS in JS Method</h1>

      <h1 className={Style.tittle}>CSS Module Method</h1>

      <h1 className='primary-sass'>Style in <span>SASS</span>  & <span>SCSS</span> Method</h1>

    </div>
  )
}

export default App
