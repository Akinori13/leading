import React, { useContext } from 'react'
import './App.css'
import { AuthContext } from './contexts/AuthContext'
import LoginForm from './components/LoginForm'

function App() {
  const { isLoggedIn } = useContext(AuthContext)

  return (
    <div className="App">
      <header className="flex justify-center">
        <h1 className="w-9/12 text-3xl text-start p-2 font-bold">
          LeadingTeam
        </h1>
      </header>

      <body>
        {isLoggedIn ? (
          <div>ログイン完了!</div>
        ) : (
          <div className="flex">
            <div className="w-full" />
            <LoginForm />
          </div>
        )}
      </body>
    </div>
  )
}

export default App
