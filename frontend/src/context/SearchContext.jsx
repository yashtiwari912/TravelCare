import { createContext } from "react";
import { useState } from "react"

export const SearchContext = createContext(false);

export const SearchContextProvider = ({ children }) => {
    const [clickedSearch, setClickedSearch] = useState(false)

    return (
        <SearchContext.Provider value={{ clickedSearch, setClickedSearch }} >
            {children}
        </SearchContext.Provider>
    )
}