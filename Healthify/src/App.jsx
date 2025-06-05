import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="text-5xl font-extrabold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 rounded-2xl shadow-2xl animate-pulse text-center">
  Healthify
</h1>

    </>
  )
}

export default App
