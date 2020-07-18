//React imports
import React, { useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

//UI components
import Navbar from './components/ui/Navbar'
import Footer from './components/ui/Footer'

//pages components
import Home from './components/pages/Home'
import About from './components/pages/About'
import Projects from './components/pages/Projects'

import ContactModal from './components/ui/ContactModal'

//Style imports
import './App.css'

export default function App() {

  // State
  const [showContactModal, setContactModal] = useState(false)

  // Modal handlers
  const openContactModal = () => setContactModal(true)
  const closeContactModal = () => setContactModal(false)

  //RETURN
  return (
    <>
      <Navbar openContactModal={ openContactModal } />

      <Switch>

        <Route path='/home' render={ () => <Home /> } />
        <Route path='/about' render={ () => <About /> } />
        <Route path='/projects' render={ () => <Projects /> } />

        <Redirect to='/home' />

      </Switch>

      <Footer />

      {/* Modals */ }

      <ContactModal showContactModal={ showContactModal } closeContactModal={ closeContactModal } />
    </>
  )
}
