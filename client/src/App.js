//React imports
import React, { useState, useEffect, useCallback } from 'react'
import { Route } from 'react-router-dom'

import Container from 'react-bootstrap/Container'

//Style imports
import './App.css'
//Services

//Components
import Navbar from './components/Navbar/Navbar'

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
      <Route path='/home' render={ () => <h1>HOME</h1> } />
      <Route path='/about' render={ () => <h1>ABOUT</h1> } />
      <Route path='/contact' render={ () => <h1>CONTACT</h1> } />
    </>
  )
}
