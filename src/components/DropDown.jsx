import React, { useId } from 'react'

const DropDown = ({
    label,
    selectCurrency = "usd",
    currencyOptions = [],
    onCurrencyChange,
}) => {

    const currencyInputId = useId()
    return (
        <div >
            <div className='text-start mt-3 mb-1'>
                <label htmlFor={currencyInputId}>{label}</label>
            </div>
            <select
                id={currencyInputId}
                value={selectCurrency}
                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                className='border-2 border-gray-500 rounded-sm pl-2 py-1 text-md max-[300px]:w-full'
            >
                {currencyOptions.map((currency) => (
                    <option key={currency} value={currency}>
                        {currency}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default DropDown