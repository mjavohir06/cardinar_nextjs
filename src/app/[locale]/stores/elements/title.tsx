import { useTranslations } from "next-intl"


const BranchTitle = () => {
    const t = useTranslations("stories")
    return (
        <div className="m-[0_0_17px]">
            <p className="text-black text-[18px]">{t("Наши официальные магазины")}</p>
        </div>
    )
}

export default BranchTitle
