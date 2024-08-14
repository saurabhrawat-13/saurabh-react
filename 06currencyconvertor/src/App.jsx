import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from './Hooks/useCurrencyInfo'


function App() {
  const [count, setCount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertAmount, setsetConvertedAmount]  = useState(0)

  const CurrencyInfo = useCurrencyInfo(from)
  const option = Object.keys(CurrencyInfo)
  const swap = () => {
    setFrom(to)
    setTo(from)
    setsetConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const  convert = () => {
  setsetConvertedAmount(amount * CurrencyInfo[to])
  }
 
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://th.bing.com/th/id/OIP.KoTopr3ThdDw42cw3pJxjAHaE7?rs=1&pid=ImgDetMain')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault(); 
                        convert() 
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setAmount(amount)}
                            selectCurrency={from}
                            
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="From"
                            amount={convertAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(amount)}
                            selectCurrency={from}
                            amountDisable
                            
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);}
export default App
 