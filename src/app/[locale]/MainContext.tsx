import { createContext, Dispatch, SetStateAction } from "react";

interface contextType {
    // staticInfo: staticInfoType
    // setStaticInfo: Dispatch<SetStateAction<staticInfoType>>
    alert:(message:string,status:number)=>void
}

export const MainContext = createContext<contextType | null>(null)