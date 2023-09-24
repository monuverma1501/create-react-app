import React from 'react'

import ContactUs from './components/misc/ContactUs'
import NewProducts from './components/misc/NewProducts'
import Header from './components/misc/Header'
import MenuBar from './components/navigations/MenuBar'
import Footer from './components/navigations/Footer'

import './App.css';

function App() {
  return (
    <div className="App">
      <MenuBar />
      <Header/>
      <NewProducts/>
      <ContactUs/>
      <Footer />
    </div>
  );
}

export default App;
