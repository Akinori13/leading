import React from 'react'
import './App.css'
import Tweets from './components/Tweets'

function App() {
  return (
    <div className="App">
      <header className="flex justify-center">
        <h1 className="w-9/12 text-3xl text-start p-2 font-bold">
          LeadingTeam
        </h1>
      </header>

      <body>
        <Tweets />
      </body>
    </div>
  )
}

export default App
