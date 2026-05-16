import { createContext, Dispatch, SetStateAction } from "react";

interface contextType {
    // staticInfo: staticInfoType
    // setStaticInfo: Dispatch<SetStateAction<staticInfoType>>
}

export const MainContext = createContext<contextType | null>(null)