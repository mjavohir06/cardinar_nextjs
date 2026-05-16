"use client"

import { branchListtype } from "../types"
import { formatPhone } from "@/libs/utils/phoneFormatter"

const BranchColumns = ({branch }: { branch: branchListtype }) => {
    const zoom=15
    

    return (
        <div className="flex items-center h-auto w-full border-t border-[#65696f8e]">
            <div className="p-4 w-[18%]">
                <p className="text-[#FF0000] text-[16px]">{branch.title }</p>
            </div>
            <div className="p-4 w-[28%] relative">
                <div className=" group/frame">
                    <p className="text-[#07316D] text-[16px]">{branch.address }</p>
                    <iframe src={`https://www.google.com/maps?q=${branch.latitude},${branch.longitude}&z=${zoom}&output=embed`} className="absolute hidden group-hover/frame:block w-120 h-70 rounded-lg border bg-white z-20"></iframe>
                </div>
            </div>
            <div className="p-4 w-[16%]">
                <p className="text-[#252129] text-[16px]">{branch.district }</p>
            </div>
            <div className="p-4 w-[16%]">
                <p className="text-[#252129] text-[16px]">{branch.region }</p>
            </div>
            <div className="p-4 w-[22%]">
                <p className="text-[#252129] text-[16px]">{formatPhone(branch.phoneNumber) }</p>
            </div>
        </div>
    )
}

export default BranchColumns
