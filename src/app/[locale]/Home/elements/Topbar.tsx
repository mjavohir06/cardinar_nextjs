"use client"

import { ArrowRightCircle } from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image"

const TopbarHome = () => {
    const t = useTranslations("home.topbar")
    return (
        <div className="w-full h-auto pt-10 overflow-clip">
            <div className='w-full md:h-225 h-auto flex items-center p-5 lg:p-[0_43px_0_200px] bg-[linear-gradient(76.34deg,#F2F2F2_31.56%,#D5D6DA_91.29%)] '>
                <div className='h-full'>
                    <div className='mt-43.25'>
                        <p className='md:text-[103px] text-[70px] text-[#D6141A]'>CARDINAR</p>
                        <div className="md:w-120 w-90">
                            <p className="md:text-[25px] text-[18px] text-black" >{t("context")}</p>
                        </div>
                        <p className="md:text-[25px] text-[18px] text-[#7C7C7CCC]">{t("context2")}</p>
                    </div>
                    <div className="flex mt-17 rounded-full h-auto justify-center items-center gap-6 p-[9.1px] bg-[#000000C2] max-w-max">
                        <p className="text-[28px] text-white ml-5">{t("button")}</p>
                        <ArrowRightCircle size={50} color="#fff" />
                    </div>
                </div>
                <div className="lg:flex hidden items-end">
                    <Image src={"/home/pic1.png"} className="w-167.75 h-233.75" alt="image" width={671} height={935} />
                </div>
            </div>
        </div>
    )
}

export default TopbarHome
// background: ;
