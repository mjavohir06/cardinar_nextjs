"use client"
import { useEffect, useRef, useState } from "react";
import { HeaderContext } from "./HeaderContext";
import Logo from "./LeftSide/Logo";
import MidddleBar from "./Middle/Middle";
import RightBar from "./RightSide/RightBar";
import MenuBar from "./MenuBar/MenuBar";
import clsx from "clsx";
import { X } from "lucide-react";




export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const headerRef = useRef<HTMLDivElement>(null)
    const [headerHeight, setHeaderHeight] = useState(0)

    useEffect(() => {
        if (!headerRef.current) return

        const observer = new ResizeObserver(() => {
            setHeaderHeight(headerRef.current?.offsetHeight ?? 0)
        })

        observer.observe(headerRef.current)
        return () => observer.disconnect()
    }, [headerRef.current])

    return (
        <HeaderContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
            <div style={{ height: headerHeight+10 }}>
                <div className=" z-50 fixed top-0 left-0 w-full" ref={headerRef}>
                    <div className="pt-5.5 pb-5.5 pl-2.5 pr-2.5 flex justify-between items-center flex-wrap gap-y-3 bg-white">
                        <Logo />
                        <MidddleBar />
                        <RightBar />
                    </div>
                    <div className={clsx("md:static flex-col fixed md:flex-row md:h-auto h-screen top-0 content-start left-0 flex gap-10  items-start  justify-start md:justify-center ",
                        "bg-white md:bg-black transition-all duration-300 ease-linear", {
                        "w-screen md:w-full visible": isMenuOpen,
                        "w-0 md:w-full invisible md:visible": !isMenuOpen
                    })}>
                        <div className="flex md:hidden justify-between p-4 items-center w-full ">
                            <Logo />
                            <X size={24} color="#000" onClick={() => setIsMenuOpen(false)} />
                        </div>
                        <MenuBar />
                    </div>
                </div>
            </div>
        </HeaderContext.Provider>
    )
}