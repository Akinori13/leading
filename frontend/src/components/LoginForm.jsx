import React, { useState } from 'react'
import usersApi from '../api/usersApi'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await usersApi.login(email, password)
      localStorage.setItem('token', response.token) // トークンをlocalStorageに保存
      console.log(response) // ログイン成功時の処理をここに記述
    } catch (error) {
      console.error(error) // エラーハンドリング
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
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
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Log In
      </button>
    </form>
  )
}

export default LoginForm
