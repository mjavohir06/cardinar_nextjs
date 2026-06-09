
import { CSSProperties, Dispatch, HTMLInputTypeAttribute, RefObject, SetStateAction } from "react"

export interface baseInputType{
    value:string
    label:string
    required?:boolean
    style?:CSSProperties
    styleInput?:CSSProperties
    styleLabel?:CSSProperties
    placeholder?:string
    type?: HTMLInputTypeAttribute
    ref?:RefObject<HTMLInputElement>
    setValue:Dispatch<SetStateAction<string>>
}