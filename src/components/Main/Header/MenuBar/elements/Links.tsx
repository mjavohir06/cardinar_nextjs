import { Link } from "@/i18n/navigation"
import { ArrowDown, Check } from "lucide-react"

interface bottomMenu {
    title: string
    url: string
}

interface Type {
    menu: {
        title: string
        url: string
        bottomMenu?: bottomMenu[]
    }
}

export default function MenuLinks({ menu }: Type) {

    return (
        <div className="relative p-[27px_15px] md:h-full h-10 flex gap-4 items-center group/parent">

            <Link href={menu.bottomMenu ? "" : menu.url} className="text-[20px] font-medium text-black md:text-white">{menu.title}</Link>
            {menu.bottomMenu &&
                <ArrowDown color="#000" size={20} className="-rotate-45 block md:hidden" />
            }
            <div className="absolute z-10 bottom-px left-0 md:group-hover/parent:w-full w-0 h-0.5 rounded-[1px] bg-white transition-all duration-500 ease-in-out">
            </div>

            {menu.bottomMenu &&
                <div className="group-hover/parent:h-auto h-0 w-78 absolute z-30 md:-left-22 left-10 top-full bg-white shadow-[2px_4px_10px] overflow-clip transition-all duration-500 ease-linear">
                    {menu.bottomMenu.map((e, i) =>
                        <Link key={i} href={menu.url + e.url} className="w-full flex h-10 items-center justify-start p-3 group/child border-b border-black">
                            <div className="h-full w-10">
                                <Check size={24} color="#000" className="group-hover/child:opacity-100 opacity-0" />
                            </div>
                            <p className="text-[20px] font-medium text-black">{e.title}</p>
                        </Link>
                    )}
                </div>
            }
        </div>
    )
}