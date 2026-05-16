import { useTranslations } from "next-intl";
import HeaderSearch from "./elements/search";
import HeaderIcons from "./elements/Icon";


export default function MidddleBar(){
    const t=useTranslations("header")

    return(
        <div className="order-2 lg:order-1  h-full grid grid-cols-[repeat(1,auto)] md:grid-cols-[repeat(2,auto)] gap-2 items-center p-[15px_10px] md:p-0 w-full bg-black md:bg-white md:w-auto">
            <HeaderSearch/>
            <HeaderIcons/>
        </div>
    )
}