import React, { useState, useContext } from 'react'
import usersApi from '../api/usersApi'
import { AuthContext } from '../contexts/AuthContext'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useContext(AuthContext)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await usersApi.login(email, password)
      login(response.token) // ログイン状態を設定
      localStorage.setItem('token', response.token) // トークンをlocalStorageに保存
      console.log(response) // ログイン成功時の処理をここに記述
    } catch (error) {
      console.error(error) // エラーハンドリング
    }
  }

  return (
    <form className="w-full max-w-xs p-4 m-4 shadow-lg" onSubmit={handleSubmit}>
      <h2 className="text-start text-2xl font-bold mb-4">ログイン</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block text-gray-700 text-sm font-bold mb-2"
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block text-gray-700 text-sm font-bold mb-2"
        />
      </div>
      <div className="mb-4 text-end">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Log In
        </button>
      </div>
    </form>
  )
}

export default LoginForm
