"use client"
import { Tovar } from '@/app/[locale]/Home/elements/TovarHome'
import { tovarProductType } from '@/app/[locale]/Home/type'
import { useTranslations } from 'next-intl'
import React from 'react'

const Ustun2Constr = ({ tovars }: { tovars: tovarProductType[] }) => {

    const t=useTranslations("constr.ustun2")

    return (
        <div className='flex flex-wrap gap-4'>
            {
                tovars.length > 0 ?
                    tovars.map((e, i) => <Tovar tovar={e} key={i} />) :
                    <p className='text-[24px] text-black'>{t("notfound")}</p>
            }
        </div>
    )
}

export default Ustun2Constr
