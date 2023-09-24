import React from 'react'
import './App.css'

import {Button,Alert} from 'react-bootstrap';

function App() {
 
  return (
    <div className='App'>
     <h1>Bootstrap in React</h1>
     {/* Button */}
     <Button variant="primary">Primary</Button>{' '}
     
     {/* Alert  */}
    
        <Alert variant="danger">
          This is a alert—check it out!
        </Alert>
    </div>
  )
}

export default App
