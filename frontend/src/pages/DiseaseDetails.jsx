import React, { useContext } from 'react'
import { DiseaseDetailsContext } from '../context/DiseaseDetails'

const DiseaseDetails = () => {
    const { diseaseDetails } = useContext(DiseaseDetailsContext)
    // const diseaseDetailsContext = useContext(DiseaseDetailsContext)
    // console.log("Data from teh context provider: ", diseaseDetails)

    return (
        <div className="bg-orange-50 p-6 rounded-2xl shadow-lg border border-orange-200 max-w-lg mx-auto">
            <h2 className="text-2xl font-bold text-orange-700 mb-4">{diseaseDetails.name}</h2>
            <div className="text-sm text-gray-700 space-y-4">
                <div>
                    <h3 className="font-semibold text-orange-600">Precautions:</h3>
                    <ul className="list-disc list-inside text-gray-600">
                        {diseaseDetails.precautions.map((precaution, index) => (
                            <li key={index}>{precaution}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-orange-600">Places to Go:</h3>
                    <ul className="list-disc list-inside text-gray-600">
                        {diseaseDetails.placesToGo.map((place, index) => (
                            <li key={index}>{place}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-orange-600">Places to Avoid:</h3>
                    <ul className="list-disc list-inside text-gray-600">
                        {diseaseDetails.placesToAvoid.map((place, index) => (
                            <li key={index}>{place}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-orange-600">Medicines:</h3>
                    <ul className="list-disc list-inside text-gray-600">
                        {diseaseDetails.medicines.map((medicine, index) => (
                            <li key={index}>{medicine}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-orange-600">Symptoms:</h3>
                    <ul className="list-disc list-inside text-gray-600">
                        {diseaseDetails.symptoms.map((symptom, index) => (
                            <li key={index}>{symptom}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-orange-600">Foods to Eat:</h3>
                    <ul className="list-disc list-inside text-gray-600">
                        {diseaseDetails.foodsToEat.map((food, index) => (
                            <li key={index}>{food}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-orange-600">Foods to Avoid:</h3>
                    <ul className="list-disc list-inside text-gray-600">
                        {diseaseDetails.foodsToAvoid.map((food, index) => (
                            <li key={index}>{food}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
       
    )
}

export default DiseaseDetails