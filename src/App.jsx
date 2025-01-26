import useCurrencyInfo from "./hooks/useCurrencyInfo"
import { DropDown } from "./components"
import { IoMdSwap } from "react-icons/io";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  return (
    
    <div className="w-full h-screen bg-amber-600 px-5">
      <div className="bg-white rounded-md max-w-fit text-center p-8 absolute top-[50%] left-[50%] transform -translate-[50%]">
        <h1 className="text-3xl font-semibold mb-6">Currency Converter</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}
          className="flex flex-col items-start"
        >
          <label className="text-xl mb-2" htmlFor="currencyInput">Enter Amount</label>
          <input className="border-2 border-gray-500 rounded-sm w-full px-3 py-1 text-xl" type="number" placeholder="Amount" id="currencyInput"
            value={amount}
            onChange={(e) => (
              setAmount(Number(e.target.value))
            )}
          />
        </form>
        <div className="flex justify-between mb-3 gap-2">
          <DropDown
            label="From"
            currencyOptions={options}
            selectCurrency={from}
            onCurrencyChange={(currency) => (
              setFrom(currency)
            )}
          />

          <button className="text-4xl self-end cursor-pointer   " onClick={swap}><IoMdSwap /></button>

          <DropDown
            label="To"
            currencyOptions={options}
            selectCurrency={to}
            onCurrencyChange={(currency) => (
              setTo(currency)
            )}
          />
        </div>
        <p className="text-start text-xl font-semibold mb-4">{amount} {from.toUpperCase()} = {convertedAmount} {to.toUpperCase()}</p>

        <button className="w-full bg-amber-600 text-white cursor-pointer py-2 rounded-sm" 
        onClick={convert}>Get Exchange Rate</button>
      </div>
    </div>
  )
}

export default App
