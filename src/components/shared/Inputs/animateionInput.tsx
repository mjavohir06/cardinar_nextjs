'use client'
import { useState } from 'react'
import { baseInputType } from './types'

export default function FloatingInput({ label, type = 'text',value,setValue ,styleInput}: baseInputType) {
    const [focused, setFocused] = useState(false)

    const isFloating = focused || value.length > 0

    return (
        <div className="relative z-10 w-full">
            <input
                type={type}
                value={value}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onChange={(e) => setValue(e.target.value)}
                style={styleInput}
                className="w-full border-b border-gray-300 text-white bg-black px-3 pt-5 pb-2 outline-none  transition-all duration-200 peer"
            />
            <label className={` absolute left-3 z-10 transition-all duration-200 pointer-events-none text-white
                ${isFloating
                    ? 'top-0 left-5 text-[14px] '
                    : 'top-3.5 text-[16px]'
                }`}>
                {label}
            </label>
        </div>
    )
}