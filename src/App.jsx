import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Read from './Components/Read';
import Create from './Components/Create';
import Update from './Components/Update';


function App() {
  return (
    <div className="app-wrapper">
      <h1 className="main-heading">My React CRUD App</h1>
      <div className="container">
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/read' element={<Read />} />
            <Route path='/create' element={<Create />} />
            <Route path='/update' element={<Update />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
