"use client"

import WhiteAnimationInput from "@/components/shared/Inputs/WhiteAnimetionInput"
import { Link } from "@/i18n/navigation"
import { fetcher } from "@/libs/utils/FetchRes"
import { useTranslations } from "next-intl"
import { useState } from "react"

const Register = () => {

    const t = useTranslations("register")
    const [ism, setIsm] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [password1, setPassword1] = useState("")
    const [password2, setPassword2] = useState("")
    const [code, setCode] = useState("")

    async function yubor() {
        if (password1.length < 6) return
        if (password1 !== password2) return
        if (!/^\+998[0-9]{9}$/.test(phone)) return

        const body = {
            fullName: ism,
            phoneNumber: phone,
            email: email,
            password: password1,
        }
        const res = await fetcher.post<{ id: number }>("/public/user/singup", body)
        if (res.status == 201 && res.data && res.data.id) setStep(res.data.id)
    }

    async function Tasdiqlash() {
        if(code.length<5) return
        const body={
            id:step,
            code:code
        }
        const res=await fetcher.post("/public/user/checkCode",body)
        alert(res.status)
    }

    const [step, setStep] = useState(0)

    return (
        <>
            <div className="m-[0_0_50px]">
                <p className="text-black text-[20px]">{t("Регистрация")}</p>
            </div>
            <div className="w-full grid gap-y-9 m-[0_0_35px]">
                <WhiteAnimationInput value={ism} setValue={setIsm} label={t("Имя")} />
                <WhiteAnimationInput value={phone} setValue={setPhone} label={t("Телефон")} />
                <WhiteAnimationInput value={email} setValue={setEmail} label={t("E-mail")} />
                <WhiteAnimationInput value={password1} setValue={setPassword1} label={t("Пароль")} type="password" />
                <WhiteAnimationInput value={password2} setValue={setPassword2} label={t("Подтверждение пароля")} type="password" />
            </div>
            <div className="m-[20px_0]">
                {step !== 0 &&
                    <>
                        <WhiteAnimationInput value={code} setValue={setCode} label="Code" />
                        <div onClick={Tasdiqlash} className="p-[18px_0] w-full flex justify-center items-center rounded-lg bg-[#00ff0d] m-[0_0_25px]">
                            <p className=" text-[15px] text-white">Tasdiqlash</p>
                        </div>
                    </>
                }
            </div>
            <div className="mt-2.5 w-full">
                <div className="p-[18px_0] w-full flex justify-center items-center rounded-lg bg-[#0057FF] m-[0_0_25px]" onClick={yubor}>
                    <p className=" text-[15px] text-white">{t("регистрация").toUpperCase()}</p>
                </div>
                <Link href={"/login"} className="p-[18px_0] w-full flex justify-center items-center rounded-lg bg-black">
                    <p className=" text-[15px] text-white">{t("Авторизация").toUpperCase()}</p>
                </Link>
            </div>

        </>
    )
}

export default Register
