"use client"

import { useTranslations } from "next-intl"

const BranchName = () => {

    const t = useTranslations("stories")

    return (
        <div className="flex items-center h-auto w-full bg-[#F7F7F7]">
            <div className="p-4 w-[18%]">
                <p className="text-black text-[16px]">{t("Магазин") }</p>
            </div>
            <div className="p-4 w-[28%]">
                <p className="text-black text-[16px]">{t("Адрес") }</p>
            </div>
            <div className="p-4 w-[16%]">
                <p className="text-black text-[16px]">{t("Район") }</p>
            </div>
            <div className="p-4 w-[16%]">
                <p className="text-black text-[16px]">{t("Регион") }</p>
            </div>
            <div className="p-4 w-[22%]">
                <p className="text-black text-[16px]">{t("Телефон для связи") }</p>
            </div>
        </div>
    )
}

export default BranchName