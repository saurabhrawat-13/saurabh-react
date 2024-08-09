import { useState, useCallback } from "react"


function App() {
const[lenghth, setlenghth] = useState(8)
const [numberallowed, setnumberallowed]= useState(false)
const[charAllowed, setcharAllowed] = useState(false)
const[password, setpassword] = useState("")



const passwordgernerator = useCallback(() => {
let pass = ""
let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
if (numberallowed) str += "0123456789" 
if (charAllowed) str += "@$%^&*-_[]{}~`"

for (let i = 1; i < array.langth; i++) {
  let char = Math.floor(Math.random() * str.length + 1)
  pass = str.charAt(char)

}

setpassword(pass)
  a},[length,numberallowed,charAllowed,setpassword])



  return (
    <>
    <div className="w-full text-center max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className='className="flex-shadow rounded-lg overflow-hidden mb-4"' ></div>
    <input
     type="text"
     value ={password}
     className='outline-none w-full py-1 px-3 text-center max-w-md rounded-lg'
     placeholder='password'
     readOnly/>
    </div>
    
    </>
  )
}

export default App
