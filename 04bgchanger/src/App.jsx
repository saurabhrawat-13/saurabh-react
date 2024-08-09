import { useState } from "react"


function App() {
  const [color, setColor] = useState("red")


  return (
    <>
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full">
          <button>Red</button>

        </div>
      </div>
    </div>

</>
  )
}

export default App
