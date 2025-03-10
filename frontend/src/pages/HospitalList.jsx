import React, { useState, useEffect, useContext } from "react";
import Papa from "papaparse";
import { NavLink } from "react-router-dom";
import LocationSearch from "../components/Location-search";
import { SearchContext } from "../context/SearchContext";

const HospitalCard = ({ hospital }) => {
    return (
        <div className="border rounded-2xl shadow-lg p-4 bg-white">
            <h2 className="text-xl font-semibold">{hospital.name}</h2>
            <p className="text-gray-500">{hospital.address}</p>
            <p className="text-gray-500">{hospital.distance} km away</p>

            <div className="mt-4">
                <h3 className="font-medium">Bed Availability</h3>
                <div className="flex items-center">
                    {Array(hospital.totalBeds)
                        .fill(0)
                        .map((_, index) => (
                            <span
                                key={index}
                                className={`w-5 h-5 inline-block m-1 ${index < hospital.availableBeds ? "bg-orange-500" : "bg-gray-300"
                                    } rounded-md`}
                            ></span>
                        ))}
                </div>
                <p className="text-gray-500">
                    {hospital.availableBeds} of {hospital.totalBeds} beds available
                </p>
            </div>

            <div className="mt-4">
                <h3 className="font-medium">OPD Slots</h3>
                <p className="text-gray-500">{hospital.opdSlots} slots available today</p>
            </div>

            <NavLink to="/hospital-beds">
                <button className="mt-4 bg-orange-400 text-white px-4 py-2 rounded-lg">
                    View Details
                </button>
            </NavLink>
        </div>
    );
};


const HospitalList = () => {
    const [hospitals, setHospitals] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortByDistance, setSortByDistance] = useState(false);
    const clickedSearch = useContext(SearchContext);

    useEffect(() => {
        if (clickedSearch.clickedSearch == true) {
            const csvData = `Hospital Name,Address,Distance,Total Beds,Available Beds,OPD Slots
        City General Hospital,123 Healthcare Ave,2.5,10,4,8
        Medicare Center,456 Medical Blvd,3.8,15,7,12
        Wellness Hospital,789 Health Street,1.2,8,2,5
        Sunrise Hospital,101 Bright Street,5.6,12,6,10
        Rainbow Care,222 Spectrum Lane,3.0,9,5,7
        Green Valley Hospital,333 Forest Road,4.2,18,10,15
        Harmony Medical Center,444 Peace Ave,1.8,7,3,4
        Silverline Hospital,555 Shine Blvd,6.4,11,7,8
        Health First,666 Priority Road,2.7,20,15,18
        LifeCare Hospital,777 Vital Street,7.1,14,9,10`;

            Papa.parse(csvData, {
                header: true,
                skipEmptyLines: true,
                complete: (result) => {
                    const parsedData = result.data.map((hospital) => ({
                        name: hospital["Hospital Name"],
                        address: hospital.Address,
                        distance: parseFloat(hospital.Distance),
                        totalBeds: parseInt(hospital["Total Beds"]),
                        availableBeds: parseInt(hospital["Available Beds"]),
                        opdSlots: parseInt(hospital["OPD Slots"]),
                    }));
                    setHospitals(parsedData)
                },
            });
        }
        // console.log("Clicked Search button status: ", clickedSearch.clickedSearch)
    }, [clickedSearch.clickedSearch])


    const filteredHospitals = hospitals
        .filter(
            (hospital) =>
                hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                hospital.address.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => (sortByDistance ? a.distance - b.distance : 0));

    return (
        <div className="p-6">
            {/* <h1 className="text-3xl font-bold mb-6">CareConnect</h1> */}

            <LocationSearch />

            <br /><br /><br />

            <div className="w-full flex items-start justify-center" >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6" >
                    {filteredHospitals.slice(0, 10).map((hospital, index) => (
                        <div>
                            <HospitalCard key={index} hospital={hospital} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HospitalList;



