import React from 'react'
import { Routes, BrowserRouter as Router,Route } from 'react-router-dom'

import Home from './components/misc/Home'
import MenuBar from './components/navigations/MenuBar'
import Footer from './components/navigations/Footer'

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <MenuBar className="header-footer"/>
      
        <div id="main-container">
          <Routes>
            <Route className="home" exact path="/" element={<Home/>}/>
            {/* <Route  path="/" element={<NewProducts/>}/> */}
            {/* <Route  path="/" element={<ContactUs/>}/> */}
          </Routes>
        </div>
      <Footer />
      </Router>
    
    </div>
  );
}

export default App;
