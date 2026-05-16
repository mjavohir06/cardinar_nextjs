"use client"

import { useTranslations } from "next-intl"
import Image from "next/image"




const ContactsUstun2 = ({ staticInfo }: { staticInfo: staticInfoType }) => {

    if (!staticInfo) return <div></div>

    const t = useTranslations("contacs.ustun2")

    const info = [
        {
            title: t("Адрес:"),
            context: staticInfo.address,
            icon: "address.svg"
        },
        {
            title: t("Телефон:"),
            context: staticInfo.phoneNumber,
            icon: "phone.svg"
        },
        {
            title: t("Время работы:"),
            context: staticInfo.workingHours,
            icon: "time.svg"
        },
        {
            title: t("E-mail:"),
            context: staticInfo.email,
            icon: "email.svg"
        },

    ]

    return (
        <div className="grid content-start gap-y-3 w-full max-w-70">
            {
                info.map((e, i) => {

                    return (
                        <div className="flex gap-x-2.5 items-center" key={i}>
                            <div className="w-9 h-full flex items-center justify-center"><Image src={`/contacts/${e.icon}`} alt="icon" width={35} height={36}/></div>
                            <div>
                                <p className="text-[18px] font-bold text-black">{e.title}</p>
                                <p className="text-[13px] font-normal text-black">{e.context}</p>
                            </div>
                        </div>
                    )
                })
            }


        </div>
    )
}

export default ContactsUstun2
