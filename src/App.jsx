import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Create from './Components/Create'
import Update from './Components/Update'
import Read from './Components/Read'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"

function App() {
  return (
    <div className="app-wrapper">
      <h1 className="main-heading">My React CRUD App</h1>
      
        <BrowserRouter>
          <Routes>
             <Route path='/' element={<Home />}> </Route>
             <Route path='/create' element={<Create />}> </Route>
             <Route path='/update/:id' element={<Update />}> </Route>
            <Route path='/read/:id' element={<Read />}> </Route>

          </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default App
