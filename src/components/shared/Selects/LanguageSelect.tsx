"use client"

import { ChevronDown, ChevronUp } from "lucide-react"
import { useLocale } from "next-intl"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { clickOtherPlace } from "./clickOtherPlace"

interface laguagetype {
    icon: string
    title: string
    code: string
}

interface LaguageSelectType {
    language: laguagetype[]
}

export default function LanguageSelect({ language }: LaguageSelectType) {
    const [open, setOpen] = useState(false)
    const [step, setStep] = useState(0)
    const router = useRouter()
    const pathname = usePathname()
    const locale = useLocale()

    const className = "h-full items-center flex justify-center"
    useEffect(() => {
        if (!open) return
        const cleanup = clickOtherPlace(setOpen)
        return cleanup
    }, [open])

    useEffect(()=>{
        language.filter((e,i)=>{if(e.code==locale) setStep(i)})
    },[])

    function chnageLang(i: number) {
        setStep(i)
        const newPath = pathname.replace(`/${locale}`, `/${language[i].code}`)
        router.push(newPath)
        setOpen(false)
    }

    return (
        <div className="h-10 pl-2 pr-2 min-w-31.25 rounded-[20px] border border-[#cfcccc] relative flex justify-between"
            onClick={() => setOpen(e => !e)}>
            <div className={className}>
                <div className="w-6.5 h-6.5 flex items-center justify-center rounded-[50%] overflow-clip border border-[#838383]">
                    <Image src={language[step].icon} alt="lang" width={26} height={26} className="h-full" />
                </div>
            </div>
            <div className={className}>
                {language[step].title}
            </div>
            <div className={className}>
                {open ?
                    <ChevronUp size={12} color="#000" /> :
                    <ChevronDown size={12} color="#000" />
                }
            </div>

            {open &&
                <ul className="absolute z-20 shadow-[2px_4px_10px] top-12 left-0 w-full p-[10px_0px_10px_5px] bg-white grid gap-1.25 justify-items-start justify-center"
                    onClick={e => e.stopPropagation()}>
                    {language.map((e, i) => (
                        <li key={i} className="w-full h-6.5 flex items-center hover:bg-[#e1e1e1] cursor-pointer p-2" onClick={() => chnageLang(i)}>
                            <div className="w-6.5 h-6.5 flex items-center justify-center rounded-[50%] border border-[#838383] overflow-clip">
                                <Image src={e.icon} alt="lang" width={26} height={26} className="h-full" />
                            </div>
                            <p className="text-[16px]">{e.title}</p>
                        </li>
                    ))}
                </ul>
            }
        </div>
    )
}