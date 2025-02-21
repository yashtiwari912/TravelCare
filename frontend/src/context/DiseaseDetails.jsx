import { createContext, useState } from "react";

export const DiseaseDetailsContext = createContext({});

export const DiseaseContextProvider = ({ children }) => {
    const [diseaseDetails, setDiseaseDetails] = useState({
        name: "",
        precautions: [],
        placesToGo: [],
        placesToAvoid: [],
        medicines: [],
        symptoms: [],
        foodsToEat: [],
        foodsToAvoid: []
    },)

    return (
        <DiseaseDetailsContext.Provider value={{ diseaseDetails, setDiseaseDetails }} >
            {children}
        </DiseaseDetailsContext.Provider>
    )
}