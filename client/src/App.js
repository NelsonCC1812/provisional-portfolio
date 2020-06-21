//React imports
import React, { useState, useEffect, useCallback } from 'react'
import { Route } from 'react-router-dom'

//Style imports
import './App.css'
//Services

//UI components
import Navbar from './components/ui/Navbar'
import Footer from './components/ui/Footer'
//pages components
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'

export default function App() {

  //USESTATE
  const [message, changeMessage] = useState('')

  //USECALLBAK
  const clearMessage = useCallback(() => changeMessage(''), [])

  //USEEFFECT

  //RETURN
  return (
    <>
      <Navbar />
      <Route path='/home' render={ () => <Home /> } />
      <Route path='/about' render={ () => <h1>ABOUT</h1> } />
      <Route path='/projects' render={ () => <h1>PROJECTS</h1> } />
      <Route path='/contact' render={ () => <Contact /> } />
      <Footer />
    </>
  )
}
