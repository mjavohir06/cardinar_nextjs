"use client"

import { Link } from "@/i18n/navigation";
import { Menu } from "lucide-react";
import Image from "next/image";
import { useContext } from "react";
import { HeaderContext } from "../../HeaderContext";



export default function HeaderIcons(){
        const ctx=useContext(HeaderContext)
        if(!ctx) return<></>

        const {setIsMenuOpen}=ctx

        return(
        <div className="flex items-center ">
            <Link href={"#!"} className="border-r border-[#e0dddd] h-full ">
                <Image src={"/header/savatcha.svg"} alt="icon" width={27} height={27} className="m-[0px_27px] hidden md:block"/>
                <Image src={"/header/savatcha-white.svg"} alt="icon" width={27} height={27} className="m-[0px_27px] block md:hidden"/>
            </Link>
            <Link href={"/login"} className="border-r  border-[#e0dddd] md:border-0 h-full">
                <Image src={"/header/userplus.svg"} alt="icon" width={27} height={27} className="m-[0px_27px]"/>
            </Link>
            <div className="md:hidden block h-full ">
                <Menu size={27} color="#fff" className="m-[0px_27px]" onClick={()=>setIsMenuOpen(e=>!e)}/>
            </div>
        </div>
    )
}