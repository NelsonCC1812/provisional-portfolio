//React imports
import React, { useState, useEffect, useCallback } from 'react'
//Style imports
import './App.css'
//Services
import AuthService from './services/auth.service'


export default function App() {

  //USESTATE
  const [loggedInUser, setTheUser] = useState(undefined)
  const [message, changeMessage] = useState('')
  const [authService] = useState(new AuthService())

  //USECALLBAK
  const clearMessage = useCallback(() => changeMessage(''), [])
  const isLoggedIn = useCallback(() => {
    authService.loggedInUser()
      .then(response => setTheUser(response.user))
      .catch(() => changeMessage('An error has occurred'))
  }, [authService])

  //USEEFFECT
  useEffect(() => isLoggedIn(), [isLoggedIn])

  //RETURN
  return (

    <>{ console.log(loggedInUser, message) }
      <h1>Here your app!</h1>
      <p>{ message }</p>
    </>

  )
}
