"use client"
import { baseInputType } from "./types";



export default function WhiteInput({label,value,setValue,placeholder,ref,type="text" ,styleInput,styleLabel,style}:baseInputType){

    return(
        <div className={`grid w-full gap-y-2 `} style={style}>
            <label className="text-[13px] font-bold text-black" style={styleLabel}>{label}</label>
            <input placeholder={placeholder} type={type} ref={ref} value={value} style={styleInput} onChange={(e)=>setValue(e.target.value)}
            className="w-full h-13 border outline-0 bg-white focus:border-black border-[rgb(223,223,230)] pl-4 text-black"/>
        </div>
    )
}