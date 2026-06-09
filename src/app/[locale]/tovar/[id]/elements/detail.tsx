"use client"
import React, { useState } from 'react'
import { productDetailType } from '../type'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { formatPrice } from '@/libs/utils/formatPrice'

const Detail = ({ detail }: { detail: productDetailType }) => {
    const [step,setStep]=useState(0)
    const [count,setCount]=useState(1)

    const t=useTranslations("detail")

    function countDown(){
        if(count>1) setCount(p=>p-1)
    }
    function countUp(){
        setCount(p=>p+1)
    }

    return (
        <div className='md:p-[20px_40px] p-[20px_10px] mb-30'>
            <div className='flex justify-between flex-wrap md:p-[0_40px] p-[0_10px] mb-30'>
                <div className='flex gap-x-10 flex-wrap'>
                    <div className='h-150 overflow-y-scroll'>
                        {
                            detail.images.map((e, i) => 
                            <div key={i} onClick={()=>setStep(i)} className='w-37 rounded-lg bg-[#F6F6F6] h-41 overflow-clip flex justify-center items-center mb-12'>
                                <Image src={e.image} alt='img' width={148} height={165} className='h-full' />
                            </div>)
                        }
                    </div>
                    <div className='w-135 h-150 rounded-lg flex justify-center bg-[#F6F6F6] overflow-clip'>
                        <Image src={detail.images[step].image} alt='img' width={540} height={600} className='h-full'/>
                    </div>

                </div>
                <div className='grid w-150 max-w-full'>
                    <div className='p-[20px_0] border-b border-[#D8D8D8] h-max'>
                        <p className='text-[26px] text-[#1E1E1E]'>{detail.title}</p>
                    </div>
                    <div className='h-13 flex items-center bg-[#EFEFEF] rounded-sm w-max'>
                        <div className='h-full flex items-center p-[0_10px] text-[#707070] text-[18px]' onClick={countDown}>
                            <p>-</p>
                        </div>
                        <div className='h-full flex items-center p-[0_10px] text-[#707070] text-[16px]'>
                            <p>{count}</p>
                        </div>
                        <div className='h-full flex items-center p-[0_10px] text-[#707070] text-[18px]' onClick={countUp}>
                            <p>+</p>
                        </div>
                    </div>

                    <div>
                        <p className='text-[#707070] text-[16px]'>{t("Цена:")}</p>
                        <p className='text-[32px] text-[#A18A68]'>{formatPrice(detail.price*count)} {t("sum")}</p>
                    </div>

                    <div className='w-full h-14 flex gap-4 items-center'>
                        <div className='w-[50%] h-full rounded-lg bg-[#1E1E1E] flex justify-center items-center'>
                            <p className='text-white text-[14px]'>{t("btn1")}</p>
                        </div>
                        <div className='w-[50%] h-full rounded-lg bg-white border flex justify-center items-center'>
                            <p className='text-black text-[14px]'>{t("btn1")}</p>
                        </div>
                    </div>
                </div>
            </div>
            

            <div className=''>
                <p className='pb-10 border-b border-[#D8D8D8] text-[20px]'>{t("Описание")}</p>
                <p className='mt-10 text-[16px] text-[#707070]'>{detail.description}</p>
            </div>

        </div>
    )
}

export default Detail
