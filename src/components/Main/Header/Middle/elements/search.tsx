"use client"
import { Search } from "lucide-react";
import { useTranslations } from "next-intl";


export default function HeaderSearch(){
    const t=useTranslations("header")

    return(
        <div className="relative flex items-center">
            <input type="text" className="h-10 w-100 rounded-[8px_0px_0px_8px]  md:bg-[#1E1E1E13] bg-[#fefefeaf] p-[10px_14px]" placeholder={t("search")}/>
            <div className="flex gap-2 p-[8px_13px] bg-[#1E1E1E] rounded-[0px_8px_8px_0px]">
                <p className="text-white hidden sm:block">{t("search")}</p>
                <Search color="#fff"/>
            </div>
        </div>
    )
}