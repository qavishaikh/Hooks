import React from 'react'
import './App.css'
import Button from './Button'
import List from './List'



function App() {
  const handleClickMe = () => {
    console.log("Click Me !")
  }
  const handleButtonClick = () => {
    console.log("Button Clicked !")
  }
  const handleSubmit = () => {
    console.log("Sbbmit !")
  }
  const handleDelete = () => {
    console.log("Delete Clicked !")
  }

  const Countries = ["Pakistan","India","USA","Srilanka","Bangladesh","Germany"]
  const Cities = ["Hyd","Karachi","Nawabshah","Sakhar","Dadu","Bhitshah"]
  
  return (
    <div className='App'>
      <h1>Reusable Components in React</h1>
     
     <Button  text= "Click Me" onClick={handleClickMe}/>
     <Button  text= "Button" onClick={handleButtonClick}/>
     <Button  text= "Submit" onClick={handleSubmit}/>
     <Button  text= "Delete" onClick={handleDelete}/>

      <br></br>

     <div>
        <List items={Countries}/>
        <List items={Cities}/>

     </div>
    </div>
  )
}

export default App
