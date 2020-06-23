//React imports
import React from 'react'
import { Route, Switch } from 'react-router-dom'

//Style imports
import './App.css'

//UI components
import Navbar from './components/ui/Navbar'
import Footer from './components/ui/Footer'
//pages components
import Home from './components/pages/Home'

export default function App() {

  //RETURN
  return (
    <>
      <Navbar />
      <Switch>

        <Route path='/home' render={ () => <Home /> } />
        <Route path='/about' render={ () => <h1>ABOUT</h1> } />
        <Route path='/projects' render={ () => <h1>PROJECTS</h1> } />

      </Switch>
      <Footer />
    </>
  )
}
