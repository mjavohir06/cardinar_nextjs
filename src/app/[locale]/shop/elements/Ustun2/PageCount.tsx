"use client"

import { getPagesArr } from "@/libs/utils/getPagesArr";
import clsx from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation"
import updateQuery from "@/libs/utils/updateQuery";




type PageType = {
    totalPages: number;
    currentPage: number;
}





const PageCountShop = ({ totalPages, currentPage }: PageType) => {
    const router = useRouter()
    const searchParams = useSearchParams()

    function changePage(page: number) {
        updateQuery(searchParams,"page",page,router)
    }

    const [count, setCount] = useState(currentPage)

    // useEffect(()=>{
    //     setCount(currentPage)
    // },[currentPage])

    function next() {
        if (count >= totalPages) return
        setCount(p => p + 1)
        changePage(count + 1)
    }

    function prev() {
        if (count <= 1) return
        setCount(p => p - 1)
        changePage(count - 1)
    }

    const pages = getPagesArr(totalPages, count)

    console.log(pages);






    return (
        <div className='w-full flex justify-center items-center'>

            <div className='flex gap-3'>
                <div className="w-10 h-10 flex justify-center items-center border rounded-full" onClick={prev}>
                    <ChevronLeft size={24} color={count <= 1 ? "#BCBCBC" : "#185BC3"} />
                </div>

                {
                    pages.map((page, i) => {
                        if (page === "...") {
                            return (
                                <div
                                    key={`dots-${i}`}
                                    className="w-10 h-10 flex items-center justify-center"
                                >
                                    ...
                                </div>
                            )
                        }

                        return (
                            <div
                                key={page}
                                onClick={() => {
                                    setCount(Number(page));
                                    changePage(Number(page))
                                }}
                                className="w-10 h-10 flex items-center justify-center cursor-pointer border rounded-full"
                            >
                                <p
                                    className={clsx("text-[18px]", {
                                        "text-[#185BC3]": page === count,
                                        "text-[#BCBCBC]": page !== count,
                                    })}
                                >
                                    {page}
                                </p>
                            </div>
                        )
                    })
                }

                {/* {
                    arr.map((e,i)=>
                    <div onClick={()=>setCount(i+1)} key={i} className="w-10 h-10 flex justify-center items-center">
                        <p className={clsx("text-[18px] ",{
                            "text-[#185BC3]":(i+1)===count,
                            "text-[#BCBCBC]":(i+1)!==count
                        })}>{i+1}</p>
                    </div>)
                } */}
                <div className="w-10 h-10 flex justify-center items-center border rounded-full" onClick={next}>
                    <ChevronRight size={24} color={count >= totalPages ? "#BCBCBC" : "#185BC3"} />
                </div>
            </div>

        </div>
    )
}

export default PageCountShop
