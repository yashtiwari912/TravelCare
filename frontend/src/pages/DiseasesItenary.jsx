import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { diseases } from "../lib/diseasesItenaryData.js"
import { DiseaseDetailsContext } from '../context/DiseaseDetails.jsx';

const DiseasesItenary = () => {
    const navigate = useNavigate();
    const diseaseDetailsContext = useContext(DiseaseDetailsContext)

    const handleRedirect = (disease) =>  {
        // console.log(disease)
        diseaseDetailsContext.setDiseaseDetails(disease)
        navigate("/disease-details")
    }

    return (
        <div className='w-full h-auto p-2 flex items-center justify-start' >
            <div className='w-full grid grid-cols-3 gap-4 ' >
                {
                    diseases.map((disease) => (
                        <div className='flex items-center justify-center bg-white border border-grey rounded-md p-2 shadow-md cursor-pointer hover:bg-orange-400 hover:text-white hover:shadow-orange-200 hover:shadow-xl'
                            key={disease.name}
                            onClick={()=>handleRedirect(disease)}
                        >
                            {disease.name}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default DiseasesItenary