import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { SearchContext } from "../context/SearchContext";

export default function LocationSearchHome() {
    const [location, setLocation] = useState("");
    const [coordinates, setCoordinates] = useState({ lat: null, lon: null });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const [showDoctors, setShowDoctors] = useState(false);

    const navigate = useNavigate();
    const { doctors } = useContext(AppContext); // Get doctors from context
    const searchContext = useContext(SearchContext)

    useEffect(() => {
        getUserLocation();
    }, []);

    const getUserLocation = () => {
        if (!navigator.geolocation) {
            setError("Geolocation is not supported by your browser.");
            setLoading(false);
            return;
        }

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                setCoordinates({ lat: latitude, lon: longitude });

                try {
                    const response = await fetch(
                        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
                    );
                    const data = await response.json();
                    const address = data.display_name || "Unknown Location";
                    setLocation(address);
                } catch (err) {
                    setError("Could not fetch location name.");
                }
                setLoading(false);
            },
            (error) => {
                setError("Location access denied. Enable it in browser settings.");
                setLoading(false);
            }
        );
    };

    const handleSearch = () => {
        if (!location) {
            setError("Please enter a location.");
            return;
        }
        setShowDoctors(true); // Show top doctors on search click
    };

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-3xl font-medium">Doctors Nearby</h1>
            {/* Search Bar */}
            <div className="flex items-center bg-white shadow-lg rounded-full p-4 w-full max-w-xl">
                <div className="flex items-center w-full">
                    <span className="text-red-500 text-xl mr-3">📍</span>
                    <input
                        type="text"
                        placeholder="Enter location..."
                        value={loading ? "Detecting location..." : location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="flex-1 p-2 border rounded outline-none"
                    />
                </div>
                <button onClick={handleSearch} className="bg-yellow-500 p-3 rounded-full ml-3 text-white">
                    🔍
                </button>
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 mt-2">{error}</p>}

            {/* Top Doctors Section - Show only when search is clicked */}
            {showDoctors && (
                <div className="flex flex-col items-center gap-4 my-16 text-[#262626] md:mx-10">

                    <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
                        {doctors.slice(0, 10).map((doctor, index) => (
                            <div
                                key={index}
                                onClick={() => {
                                    navigate(`/appointment/${doctor._id}`);
                                    scrollTo(0, 0);
                                }}
                                className="border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
                            >
                                <img className="bg-[#EAEFFF]" src={doctor.image} alt="" />
                                <div className="p-4">
                                    <div
                                        className={`flex items-center gap-2 text-sm text-center ${doctor.available ? "text-green-500" : "text-gray-500"
                                            }`}
                                    >
                                        <p
                                            className={`w-2 h-2 rounded-full ${doctor.available ? "bg-green-500" : "bg-gray-500"
                                                }`}
                                        ></p>
                                        <p>{doctor.available ? "Available" : "Not Available"}</p>
                                    </div>
                                    <p className="text-[#262626] text-lg font-medium">{doctor.name}</p>
                                    <p className="text-[#5C5C5C] text-sm">{doctor.speciality}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* More button */}
                    <button
                        onClick={() => {
                            navigate("/doctors");
                            scrollTo(0, 0);
                            searchContext.setClickedSearch(true);
                        }}
                        className="bg-[#EAEFFF] text-gray-600 px-12 py-3 rounded-full mt-10"
                    >
                        more
                    </button>
                </div>
            )}
        </div>
    );
}


