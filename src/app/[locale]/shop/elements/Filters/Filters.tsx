"use client"

import { useTranslations } from "next-intl"
import { categoryType, colorType } from "./type"
import updateQuery, { clearQuery } from "@/libs/utils/updateQuery"
import { useSearchParams, useRouter } from "next/navigation"
import clsx from "clsx"
import { FilterX } from "lucide-react"

interface prompType {
  colors: colorType[]
  categories:categoryType[]
  params: {
    page?: string,
    colorId?: number,
    categoryId?: number
  }
}

const FiltersShop = ({ colors ,params,categories}: prompType) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const t = useTranslations("shop.filter")

  function changecolor(colorId: number) {
    updateQuery(searchParams, "colorId", colorId, router)
  }
  function changecategory(categoryId: number) {
    updateQuery(searchParams, "categoryId", categoryId, router)
  }

  return (
    <div className='w-full h-auto p-10 pb-30 border-b border-black'>
      <p className='text-[28px] text-black font-bold'>{t("filter")}</p>

      <div className="flex flex-wrap items-center gap-6">
        <div className='flex flex-wrap items-center gap-4'>
          <p className="text-[20px] text-black font-semibold">{t("color")}</p>

          {
            colors.map((e, i) => <div key={i} className={clsx("w-6 h-6 outline-3 outline-offset-2 rounded-full ",{
              "outline-gray-700":e.id!==Number(params.colorId),
              "outline-blue-800": e.id === Number(params.colorId)
            })} style={{ background: e.color }} onClick={() => changecolor(e.id)}></div>)
          }

        </div>
          <div className='flex flex-wrap items-center gap-4'>
          <p className="text-[20px] text-black font-semibold">{t("category")}</p>

          {
            categories.map((e, i) => <div key={i} className={clsx("p-[4px_14px] outline-3 outline-offset-2 rounded-sm ",{
              "outline-gray-700":e.id!==Number(params.colorId),
              "outline-blue-800": e.id === Number(params.colorId)
            })}  onClick={() => changecategory(e.id)}>
              <p className="text-[18px] text-black">{e.title}</p>
            </div>)
          }

        </div>
        <div onClick={()=>clearQuery(router)} className="p-[5px_10px] rounded-lg border-2 bg-white active:bg-gray-300">
          <FilterX size={24} color="#000"/>
        </div>



      </div>


    </div>
  )
}

export default FiltersShop
