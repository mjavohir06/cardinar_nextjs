import { createContext, Dispatch, SetStateAction } from "react";

interface contextType {
    isMenuOpen: boolean
    setIsMenuOpen: Dispatch<SetStateAction<boolean>>
}

export const HeaderContext = createContext<contextType | null>(null)