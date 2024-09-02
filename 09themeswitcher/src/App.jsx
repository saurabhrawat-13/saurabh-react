import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './Contexts/theme'

function App() {
const[themeMode, setThememode] = useState("light")
  return (
    <ThemeProvider value={{themeMode, lightTheme,darkTheme}}>
   
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {/*themebtn*/}
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                      {/* card */}
                                           
                    </div>
                </div>
            </div>
    </ThemeProvider>

  )
}

export default App
