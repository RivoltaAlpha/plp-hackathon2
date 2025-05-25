import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FarmConnect from './FarmConnect'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <FarmConnect />
    </>
  )
}

export default App
