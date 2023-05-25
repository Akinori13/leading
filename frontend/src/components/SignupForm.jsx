import React, { useState, useContext } from 'react'
import usersApi from '../api/usersApi'
import { AuthContext } from '../contexts/AuthContext'

const SignupForm = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useContext(AuthContext)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await usersApi.signup(username, email, password)
      login(response.token) // ログイン状態を設定
      console.log(response) // サインアップ成功時の処理をここに記述
    } catch (error) {
      console.error(error) // エラーハンドリング
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Sign Up</button>
    </form>
  )
}

export default SignupForm
