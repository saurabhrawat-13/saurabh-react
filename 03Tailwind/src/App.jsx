import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'


function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username:"saurabh",
    age:25
  }
  let newArray = [1,2,3]

  return (
    <>
     <h1 className='bg-green-400'>TailWind Test</h1>
     <Card username ="Saurabh rawat" btnText="click me"/>
     <Card username ="naveen rawat" btnText="visit me"/>
     
    </>
  )
}

export default App
