import React, { useContext } from 'react'
import { DiseaseTravelDetailsContext } from '../context/DiseaseDetails'

const DiseaseDetails = () => {
    const { diseaseTravelDetails } = useContext(DiseaseTravelDetailsContext)
    // const diseaseDetailsContext = useContext(DiseaseDetailsContext)
    console.log("Data from teh context provider: ", diseaseTravelDetails)

    return (
        <div className="bg-orange-50 p-6 rounded-2xl shadow-lg border border-orange-200 max-w-3xl mx-auto space-y-6">
  {/* Disease Information */}
  <div className="bg-white p-6 rounded-lg shadow-md border border-orange-100">
    <h2 className="text-2xl font-bold text-orange-700 mb-4">{diseaseTravelDetails.disease}</h2>
    <p className="text-gray-700 text-sm mb-4">{diseaseTravelDetails.description}</p>
  </div>

  {/* Travel Places Section */}
  <div>
    <h3 className="text-xl font-bold text-orange-700 mb-4">Travel Places</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {diseaseTravelDetails.travelPlaces.map((place, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-lg shadow-md border border-orange-100 flex flex-col"
        >
          {/* Image */}
          <img
            src={place.image}
            alt={place.name}
            className="rounded-md w-full h-40 object-cover mb-4"
          />
          {/* Name */}
          <h4 className="text-lg font-semibold text-orange-600 mb-2">{place.name}</h4>
          {/* Details */}
          <p className="text-sm text-gray-600">{place.details}</p>
        </div>
      ))}
    </div>
  </div>
</div>


        // <div className="bg-orange-50 p-6 rounded-2xl shadow-lg border border-orange-200 max-w-lg mx-auto">
        //     <h2 className="text-2xl font-bold text-orange-700 mb-4">{diseaseDetails.name}</h2>
        //     <div className="text-sm text-gray-700 space-y-4">
        //         <div>
        //             <h3 className="font-semibold text-orange-600">Precautions:</h3>
        //             <ul className="list-disc list-inside text-gray-600">
        //                 {diseaseDetails.precautions.map((precaution, index) => (
        //                     <li key={index}>{precaution}</li>
        //                 ))}
        //             </ul>
        //         </div>
        //         <div>
        //             <h3 className="font-semibold text-orange-600">Places to Go:</h3>
        //             <ul className="list-disc list-inside text-gray-600">
        //                 {diseaseDetails.placesToGo.map((place, index) => (
        //                     <li key={index}>{place}</li>
        //                 ))}
        //             </ul>
        //         </div>
        //         <div>
        //             <h3 className="font-semibold text-orange-600">Places to Avoid:</h3>
        //             <ul className="list-disc list-inside text-gray-600">
        //                 {diseaseDetails.placesToAvoid.map((place, index) => (
        //                     <li key={index}>{place}</li>
        //                 ))}
        //             </ul>
        //         </div>
        //         <div>
        //             <h3 className="font-semibold text-orange-600">Medicines:</h3>
        //             <ul className="list-disc list-inside text-gray-600">
        //                 {diseaseDetails.medicines.map((medicine, index) => (
        //                     <li key={index}>{medicine}</li>
        //                 ))}
        //             </ul>
        //         </div>
        //         <div>
        //             <h3 className="font-semibold text-orange-600">Symptoms:</h3>
        //             <ul className="list-disc list-inside text-gray-600">
        //                 {diseaseDetails.symptoms.map((symptom, index) => (
        //                     <li key={index}>{symptom}</li>
        //                 ))}
        //             </ul>
        //         </div>
        //         <div>
        //             <h3 className="font-semibold text-orange-600">Foods to Eat:</h3>
        //             <ul className="list-disc list-inside text-gray-600">
        //                 {diseaseDetails.foodsToEat.map((food, index) => (
        //                     <li key={index}>{food}</li>
        //                 ))}
        //             </ul>
        //         </div>
        //         <div>
        //             <h3 className="font-semibold text-orange-600">Foods to Avoid:</h3>
        //             <ul className="list-disc list-inside text-gray-600">
        //                 {diseaseDetails.foodsToAvoid.map((food, index) => (
        //                     <li key={index}>{food}</li>
        //                 ))}
        //             </ul>
        //         </div>
        //     </div>
        // </div>
    )
}

export default DiseaseDetails