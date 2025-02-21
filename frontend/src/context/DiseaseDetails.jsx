import { createContext, useState } from "react";

export const DiseaseTravelDetailsContext = createContext({});

export const DiseaseTravelContextProvider = ({ children }) => {
    const [diseaseTravelDetails, setDiseaseTravelDetails] = useState({
        disease: "",
        description: "",
        travelPlaces: [
            {
                name: "",
                details: "",
                image: "",
            },
            {
                name: "",
                details: "",
                image: "",
            },
        ],
    },)

    return (
        <DiseaseTravelDetailsContext.Provider value={{ diseaseTravelDetails, setDiseaseTravelDetails }} >
            {children}
        </DiseaseTravelDetailsContext.Provider>
    )
}