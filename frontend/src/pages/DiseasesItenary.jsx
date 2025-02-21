import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { diseaseTravelPlacesData } from "../lib/diseasesItenaryData.js"
import { DiseaseTravelDetailsContext } from '../context/DiseaseDetails.jsx';
import LocationSearch from "../components/Location-search";

const DiseasesItenary = () => {
    const navigate = useNavigate();
    const { setDiseaseTravelDetails } = useContext(DiseaseTravelDetailsContext)

    const handleRedirect = (disease) => {
        // console.log(disease)
        setDiseaseTravelDetails(disease)
        navigate("/disease-details")
    }

    return (
        <div className='w-full h-auto p-2 flex flex-col items-center justify-start gap-4' >
            <div>
                <LocationSearch />
            </div>
            <div className='w-full grid grid-cols-3 gap-4 ' >
                {
                    diseaseTravelPlacesData.map((data) => (
                        <div className='flex items-center justify-center bg-white border border-grey rounded-md p-2 shadow-md cursor-pointer hover:bg-orange-400 hover:text-white hover:shadow-orange-200 hover:shadow-xl'
                            key={data.disease}
                            onClick={() => handleRedirect(data)}
                        >
                            {data.disease}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default DiseasesItenary