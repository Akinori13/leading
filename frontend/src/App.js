import React, { useContext } from 'react'
import './App.css'
import { AuthContext } from './contexts/AuthContext'
import LoginForm from './components/LoginForm'

function App() {
  const { isLoggedIn } = useContext(AuthContext)

  return (
    <div className="App">
      <header>
        <h1>Hello, Leading Team...</h1>
      </header>
      <body>
        <h2>{isLoggedIn ? 'You are logged in!' : 'You are not logged in!'}</h2>
        <LoginForm />
      </body>
    </div>
  )
}

export default App
