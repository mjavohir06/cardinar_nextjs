"use client"

import WhiteAnimationInput from "@/components/shared/Inputs/WhiteAnimetionInput"
import { Link } from "@/i18n/navigation"
import { fetcher } from "@/libs/utils/FetchRes"

import { useTranslations } from "next-intl"
import { useState } from "react"

const Login = () => {

    const t = useTranslations("register")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function yubor(){
        const body={
            email:email,
            password
        }
        const res=await fetcher.post("/public/user/singin",body)
        if(res.status!==201) alert(res.data)
    }

    return (
        <>
            <div className="m-[0_0_50px]">
                <p className="text-black text-[20px]">{t("Вход / Авторизация")}</p>
            </div>
            <div className="w-full grid gap-y-9 m-[0_0_35px]">
                <WhiteAnimationInput value={email} setValue={setEmail} label={t("E-mail")} />
                <WhiteAnimationInput value={password} setValue={setPassword} label={t("Пароль")} type="password"/>
            </div>
            <div className="mt-2.5 w-full">
                <div className="p-[18px_0] w-full flex justify-center items-center rounded-lg bg-[#0057FF] m-[0_0_25px]" onClick={yubor}>
                    <p className=" text-[15px] text-white">{t("войти").toUpperCase()}</p>
                </div>
                <Link href={"/register"} className="p-[18px_0] w-full flex justify-center items-center rounded-lg bg-black">
                    <p className=" text-[15px] text-white">{t("регистрация").toUpperCase()}</p>
                </Link>
            </div>

        </>
    )
}

export default Login
