"use client"

import WhiteInput from "@/components/shared/Inputs/whiteInput"
import { fetcher } from "@/libs/utils/FetchRes"
import { useTranslations } from "next-intl"
import { useState } from "react"

const ContactsUstun1 = () => {
    const t = useTranslations("contacs.ustun1")
    const [ism, setIsm] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [content, setContent] = useState("")

    async function yubor() {
        const body={
            fullName:ism,
            phoneNumber:phone,
            email,
            comments:content
        }
        const res=await fetcher.post("/public/request",body)
        if(res.status!==201) alert(res.status)
        else alert("Talab yuborildi.")
    }


    return (
        <div>
            <div className="max-w-125 mb-12">
                <p className="text-[32px] text-black font-bold mb-4">{t("Контакты")}</p>
                <p className="text-[16px] text-black font-light">{t("desc")}</p>
            </div>
            <div className="max-w-108">
                <WhiteInput value={ism} setValue={setIsm} label={t("Ваше имя*")} placeholder={t("Имя")} style={{ marginBottom: "25px" }} />
                <WhiteInput value={phone} setValue={setPhone} label={t("Ваш номер телефона*")} placeholder={t("Номер телефона")} style={{ marginBottom: "25px" }} />
                <WhiteInput value={email} setValue={setEmail} label={t("Ваш Email")} placeholder={t("Username")} style={{ marginBottom: "25px" }} />
            </div>
            <div className="grid w-full gap-y-2 mb-2.75">
                <p className="text-[13px] font-bold text-black">{t("Коментарии")}</p>
                <textarea value={content} onChange={(e)=>setContent(e.target.value)} className="border border-[rgb(129,129,129)] max-w-225 w-full h-84 p-3" cols={200} rows={20}></textarea>
            </div>
            <div className="bg-[#1e1e1e] p-[20px_0] w-full max-w-72.5 rounded-sm flex justify-center items-center" onClick={yubor}>
                <p className="text-white font-bold text-[13px]">{t("отправить")}</p>
            </div>
        </div>
    )
}

export default ContactsUstun1
