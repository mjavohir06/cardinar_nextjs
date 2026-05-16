'use client'
import { useState } from 'react'
import { baseInputType } from './types'

export default function WhiteAnimationInput({ label, type = 'text',value,setValue }: baseInputType) {
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
                className="w-full border border-dotted border-gray-500 text-[20px] rounded-lg text-black bg-white px-3 pt-3 pb-2 outline-none  transition-all duration-200 peer"
            />
            <label className={` absolute left-3 z-10 transition-all bg-white p-[0_10px] duration-200 pointer-events-none text-[#6a7282]
                ${isFloating
                    ? '-top-2 -left-8 text-[14px] '
                    : 'top-3.5 text-[16px]'
                }`}>
                {label}
            </label>
        </div>
    )
}