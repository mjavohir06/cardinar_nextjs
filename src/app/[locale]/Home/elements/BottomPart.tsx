"use client"

import FloatingInput from "@/components/shared/Inputs/animateionInput"
import { ArrowRightCircle } from "lucide-react"
import { useTranslations } from "next-intl"
import { useState } from "react"

const BottomPart = () => {
    const t=useTranslations("home.bottomPart")

    const [ism,setIsm]=useState("")

    return (
        <div className='w-full flex justify-center p-[60px_20px_100px] md:p-[101px_190px_212px]'>
            <div className='w-full md:h-97.5 flex md:flex-nowrap flex-wrap p-[48px_0] gap-30 justify-center bg-[#1E1E1E]'>
                <div className='w-105 grid'>
                    <p className="text-[40px] font-bold text-white ">{t("title")}</p>
                    <p className="text-[20px] font-light text-white pb-8">{t("text")}</p>
                    <ArrowRightCircle size={75} color="#fff"/>
                </div>
                <div className='w-100 grid'>
                    <FloatingInput label={t("Имя")} setValue={setIsm} value={ism}/>
                    <FloatingInput label={t("Номер телефона")} setValue={setIsm} value={ism}/>
                    <FloatingInput required={false} label={t("Username")} setValue={setIsm} value={ism}/>
                    <div className="w-full h-14 flex justify-center items-center rounded-lg bg-[#E7E7E7] mt-5">
                        <p className="text-[16px] text-[#1E1E1E]">{t("отправить")}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BottomPart
