"use client"
import { useTranslations } from "use-intl"
import MenuLinks from "./elements/Links"
import { fetcher } from "@/libs/utils/FetchRes"
import { useEffect, useState } from "react"


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
    const t = useTranslations("hearderMenu")


    const menu:Type[] = [
        {
            title: t("katalog"),
            url: "/shop",
        },
        {
            title: t("Конструктор"),
            url: "/constructor",
            bottomMenu: [
                {
                    title: t("Конструктор чехлов"),
                    url: "/1"
                },
                {
                    title: t("Конструктор поликов"),
                    url: "/2"
                },
            ]
        },
        {
            title: t("Где купить?"),
            url: "/stores",
        },
        {
            title: t("Контакты"),
            url: "/contacts",
        },

    ]


    return (
        <>
            {
                menu.map((e, i) => <MenuLinks menu={e} key={i} />)
            }

        </>
    )
}