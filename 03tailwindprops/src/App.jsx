import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import card from './components/card'
function App() {
const[count, setcount] = useState(0)
 
  return (
    <>
    <h1 className='bg-green-400'>Tailwind test</h1>
    <card/>
    </>
  )
}

export default App
