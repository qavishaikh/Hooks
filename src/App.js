import React from 'react'
import './App.css'

function App() {

  const names = ["Qavi","Hamdan","Ali","Hussain","Haram"]

  const products = [{
    id : 1,
    name : "Procuct 1",
    price : 200
  },
  {
    id : 2,
    name : "Procuct 2",
    price : 350
  },
  {
    id : 3,
    name : "Procuct 3",
    price : 300
  },
  {
    id : 4,
    name : "Procuct 4",
    price : 400
  },
  {
    id : 5,
    name : "Procuct 5",
    price : 500
  }
]

const fruits = ["Apple","Mango","Orange","Grapes","pinepale"]
const fruititems = fruits.map((fruit,index) => <li style={{"listStyle":"none",color:"orange"}} key={index}>{fruit}</li>);
 
  return (
    <div className='App'>
      <h1>Array Map Methods</h1>
      {/* Array Map */}
      <ul>
        {
          names.map((names,index) => (
            <li style={{"listStyle":"none"}} key={index}>{names}</li>
          ))
        }
      </ul>
      {/* Object Map */}

      <ul>
        {
          products.map((product) => (
            <li style={{"listStyle":"none",color:"red"}} key={product.id}>{product.name}- ${product.price}</li>
          ))
        }
  
      </ul>

      {/* Object Map */}

      <ul>{fruititems}</ul>
    </div>
  )
}

export default App
