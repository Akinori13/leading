import React, { createContext, useState } from 'react'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [token, setToken] = useState('')

  const login = (authToken) => {
    setIsLoggedIn(true)
    setToken(authToken)
  }

  const logout = () => {
    setIsLoggedIn(false)
    setToken('')
    localStorage.removeItem('token')
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
