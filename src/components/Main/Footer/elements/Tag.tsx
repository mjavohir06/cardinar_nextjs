import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";



export default function FooterTag() {
    const t=useTranslations("footer")

    return (
        <Link href={""} className="flex gap-2 items-center">
            <p className="text-white text-[10px] ">{t("СДЕЛАНО В")}</p>
            <Image src={"/social/icon.svg"} alt="img" width={100} height={28} className="h-7"  />
        </Link>
    )
}