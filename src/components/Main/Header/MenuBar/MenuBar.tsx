import { useTranslations } from "use-intl"
import MenuLinks from "./elements/Links"


interface bottomMenu {
    title: string
    url: string
}

interface Type {
    title: string
    url: string
    bottomMenu?: bottomMenu[]
}


export default function MenuBar() {
    const t=useTranslations("hearderMenu")

    const menu:Type[] = [
        {
            title:t("katalog"),
            url:"/shop",
            bottomMenu:[
                {
                    title:t("Авточехол"),
                    url:"/1"
                },
                {
                    title:t("Полик"),
                    url:"/2"
                },
                {
                    title:t("Накидки на торпеду"),
                    url:"/3"
                },
            ]
        },
        {
            title:t("Конструктор"),
            url:"/constructor",
            bottomMenu:[
                {
                    title:t("Конструктор чехлов"),
                    url:"/1"
                },
                {
                    title:t("Конструктор поликов"),
                    url:"/2"
                },
            ]
        },
        {
            title:t("Где купить?"),
            url:"/stores",
        },
        {
            title:t("Контакты"),
            url:"/contacts",
        },
        
    ]
    return (
        <>
            {
                menu.map((e,i)=><MenuLinks menu={e} key={i}/>)
            }
            
        </>
    )
}