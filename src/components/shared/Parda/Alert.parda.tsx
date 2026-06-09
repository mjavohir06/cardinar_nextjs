"use client"
import clsx from 'clsx'
import { X } from 'lucide-react'
import React, { Dispatch, SetStateAction, useEffect } from 'react'

interface ptype {
    setOpen: Dispatch<SetStateAction<boolean>>
    open: boolean
    message: string
    status: number
}
const Alert = ({ setOpen, open, message, status }: ptype) => {

    useEffect(() => {
        if (!open) return

        const timer = setTimeout(() => {
            setOpen(false)
        }, 5000)

        return () => clearTimeout(timer)
    }, [open, setOpen])

    function exit() {
        setOpen(false)
        console.log("exit");

    }

    return (
        <div className={clsx('fixed z-1000 top-4 right-4 md:w-120 w-80 h-auto p-[25px_10px_25px_20px] border bg-white',
            {
                "text-green-700": 200 <= status && status < 300,
                "text-yellow-600": 300 <= status && status < 400,
                "text-red-700": 400 <= status,
                "hidden": !open,
                "block": open
            }
        )}>
            <p className='text-[22px] '>{status}</p>
            <p className='text-[18px] font-semibold'>{message}</p>
            <X size={24} color='#000' onClick={exit} className='absolute z-20 right-2 top-2' />
            <div className="absolute bottom-0 left-0 h-1 w-full bg-gray-200">
                <div
                    key={open ? "open" : "closed"}
                    className="h-full animate-alert-progress bg-current"
                />
            </div>
        </div>
    )
}

export default Alert
