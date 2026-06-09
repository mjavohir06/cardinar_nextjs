"use client"

import { useTranslations } from "next-intl"
import { tovarProductType } from "../type"
import Image from "next/image"
import { Link } from "@/i18n/navigation"
import { Settings } from "lucide-react"
import { formatPrice } from "@/libs/utils/formatPrice"


export const Tovar = ({ tovar }: { tovar: tovarProductType }) => {
    const t = useTranslations("home.tovars")
    return (
        <div className="w-115 h-165 shrink-0  m-[0_20px]">
            <div className="w-full h-120 flex justify-center items-center bg-[#F6F6F6] relative">
                <Image src={tovar.image ?? "/home/notfound.png"} alt="image" width={380} height={410} className="h-102.5 rounded-lg" />
                <div className="absolute right-2 top-2 flex items-center gap-2">
                    <Image src={"/home/setting.svg"} alt="icon" width={23} height={25} />
                    <Link href={"/tovar/" + tovar.id} className="pl-2 border-l border-[#DFDFE6] flex items-center">
                        <p className="text-[#2283DC]">{t("constuctor")}</p>
                    </Link>
                </div>
            </div>
            <div>
                <div className="flex justify-between items-center mt-7">
                    <p className="text-[#606060] text-[20px]">{tovar.title}</p>
                    <p className="text-[#1E1E1E] text-[20px]">{formatPrice(tovar.price)} {t("sum")}</p>
                </div>
                <div className="w-53.75 h-14.25 rounded-lg border border-[#DEE2E7] bg-white flex items-center justify-center mt-8 gap-8">
                    <Image src={"/home/savat.svg"} alt="icon" width={25} height={25} />
                    <p className="text-[22px] text-[#2283DC]">{t("btn")}</p>
                </div>
            </div>
        </div>
    )
}


const TovarHome = ({ tovars }: { tovars: tovarProductType[] }) => {
    const t = useTranslations("home.tovars")
    return (
        <div>
            <div className='mb-4 flex justify-center md:w-150 w-auto pl-4'>
                <p className='text-[24px]'>{t("title")}</p>
            </div>

            <div className='flex overflow-x-scroll overflow-y-clip w-full h-auto'>
                {
                    tovars.length > 0 ?
                        tovars.map((e, i) => <Tovar tovar={e} key={i} />) :
                        <p className='text-[24px] text-black'>{t("notfound")}</p>
                }
            </div>

        </div>
    )
}

export default TovarHome
