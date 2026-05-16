import LanguageSelect from "@/components/shared/Selects/LanguageSelect";
import { useTranslations } from "next-intl";




export default function RightBar() {
    const t = useTranslations("languages")


    const languages = [
        {
            title: t("russian"),
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEdZ-DN2pkft5O2eXPt5VUw0XI8YJ-dpdGaQ&s",
            code: "ru"
        },
        {
            title: t("uzbek"),
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw77inqgz09hQOJ9YaJ-m7RfYV6Zjsbs6UEQ&s",
            code: "uz"
        },

    ]

    return (
        <div className="order-1 lg:order-2  h-full">
            <LanguageSelect language={languages} />
        </div>
    )
}