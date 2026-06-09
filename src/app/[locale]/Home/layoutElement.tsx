"use client"

import { MainContext } from "../MainContext";
import { useState } from "react";
import Alert from "@/components/shared/Parda/Alert.parda";





const LayoutElement = ({
    children
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const [open, setOpen] = useState(false)
    const [message, setMessage] = useState<{ message: string, status: number }>({ message: "", status: 200 })

    function alert(message: string, status: number) {
        setOpen(true)
        setMessage({ message, status })
    }
    return (
        <MainContext.Provider value={{ alert }}>
            <div>
                {children}
            </div>

            <Alert setOpen={setOpen} open={open} message={message.message} status={message.status} />

        </MainContext.Provider>
    )
}

export default LayoutElement
