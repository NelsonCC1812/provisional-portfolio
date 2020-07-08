//React imports
import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

//UI components
import Navbar from './components/ui/Navbar'
import Footer from './components/ui/Footer'

//pages components
import Home from './components/pages/Home'
import About from './components/pages/About'
import Projects from './components/pages/Projects'

//Style imports
import './App.css'

export default function App() {

  //RETURN
  return (
    <>
      <Navbar />

      <Switch>

        <Route path='/home' render={ () => <Home /> } />
        <Route path='/about' render={ () => <About /> } />
        <Route path='/projects' render={ () => <Projects /> } />

        <Redirect to='/home' />

      </Switch>

      <Footer />
    </>
  )
}
