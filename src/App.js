import React from 'react'
import './App.css'

import Table from 'react-bootstrap/Table';

function App() {
  const tableData = [
    {id:1, name:"Qavi",age:19,city:"Hyderabad" },
    {id:2, name:"Dani",age:59,city:"Hyderabad" },
    {id:3, name:"Zain",age:79,city:"Dadu" },
    {id:4, name:"Mano",age:59,city:"Nawabshah" },
    {id:5, name:"Ali",age:30,city:"Dadu" },
    {id:6, name:"Abdi",age:53,city:"Sakhar" },
    {id:7, name:"Anus",age:32,city:"Hala" },
    {id:8, name:"Ayat",age:80,city:"Paretabad" }

  ]
  
  return (
    <div className='App'>
      <h1>Bootstrap Table in React</h1>
      
      <Table striped bordered hover>
        <thead>
          <th>Roll No</th>
          <th>Name</th>
          <th>Age</th>
          <th>City</th>
        </thead>
        <tbody>
          {
            tableData.map((data) => (
            data.city === "Hyderabad" ? (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.city}</td>
              </tr> ) : null 
            ))
          }
        </tbody>
      </Table>
    </div>
  )
}

export default App
