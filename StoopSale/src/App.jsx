import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import Footer from './components/Footer'
import Body from './components/Body'

function App() {

  return (
    <div id="root">
      <div className='navbar-bg'>
        <Navbar/>
      </div>
      <div className='main-content'>
        <Body/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
