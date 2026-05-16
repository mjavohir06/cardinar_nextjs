import { Link } from "@/i18n/navigation"
import { formatPhone } from "@/libs/utils/phoneFormatter"
import { useTranslations } from "next-intl"




export default function StaticInfo({ info }: { info: staticInfoType }) {
    const t = useTranslations("footer")


    return (
        <>
            <div className="grid gap-y-6 content-start p-[0px_25px] justify-items-center">
                <h3 className="text-[hsla(0,0%,100%,.5)]">{t("Информация")}</h3>
                <ul className="grid justify-items-center md:justify-items-start">
                    <li className="relative hover:pl-4 text-white before:content-['•'] before:absolute before:left-0 before:opacity-0 hover:before:opacity-100 transition-all duration-400 :ease-linear">
                        <Link href={"/shop"}>{t("Каталог")}</Link>
                    </li>
                    <li className="relative hover:pl-4 text-white before:content-['•'] before:absolute before:left-0 before:opacity-0 hover:before:opacity-100 transition-all duration-400 ease-linear">
                        <Link href={"/constructor"}>{t("Конструктор")}</Link>
                    </li>
                    <li className="relative hover:pl-4 text-white before:content-['•'] before:absolute before:left-0 before:opacity-0 hover:before:opacity-100 transition-all duration-400 ease-linear">
                        <Link href={"/stores"}>{t("Где купить?")}</Link>
                    </li>
                </ul>
            </div>
            <div className="grid gap-y-6 content-start p-[0px_15px]  justify-items-center md:justify-items-start">
                <h3 className="text-[hsla(0,0%,100%,.5)]">{t("Номер телефона")}</h3>
                <h3 className="text-white">{formatPhone(info.phoneNumber)}</h3>
            </div>
            <div className="grid gap-y-6 content-start p-[0px_15px] justify-items-center md:justify-items-start">
                <h3 className="text-[hsla(0,0%,100%,.5)]">{t("Почта")}</h3>
                <h3 className="text-white">{info.email}</h3>
            </div>
            <div className="grid gap-y-6 content-start p-[0px_15px] justify-items-center md:justify-items-start">
                <h3 className="text-[hsla(0,0%,100%,.5)]">{t("Адрес (офис)")}</h3>
                <h3 className="text-white">{info.address}</h3>
            </div>
        </>
    )
}