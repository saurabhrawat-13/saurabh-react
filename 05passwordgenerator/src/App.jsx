import { useState, useCallback, useEffect, useRef } from "react"


function App() {
  const [length, setlength] = useState(8)
  const [numberallowed, setnumberallowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setpassword] = useState("")

const passwordRef = useRef(null)
  const passwordgenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberallowed) str += "0123456789"
    if (charAllowed) str += "@$%^&*-_[]{}~`"

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }

    setpassword(pass)
  }, [length, numberallowed, charAllowed, setpassword])

  const copyPasswordToClipboard =useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordgenerator()
  }, [length, numberallowed, charAllowed, passwordgenerator])
  return (
    <>
      <div className="w-full text-center max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className='className="flex-shadow rounded-lg overflow-hidden mb-4"' >
        <input
          type="text"
          value={password}
          className='outline-none w-full py-2 px-3 text-center max-w-md rounded-lg'
          placeholder='password'
          readOnly
          ref={passwordRef} 
          />
        
          <button 
          onClick={copyPasswordToClipboard}
           className='outline-none bg-blue-700 text-white
          px-1 py-0.5 shrink-0'>Copy</button>
          </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setlength(e.target.value) }}
            />
            <label>Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
              defaultChecked={numberallowed}
              id="numberInput"
              onChange={() => {
                setnumberallowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setcharAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="characterInput">Charcters</label>

          </div>
        </div>
      </div>

    </>
  )
}

export default App
