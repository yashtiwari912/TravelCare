import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

    const navigate = useNavigate()

    return (
        <div className='flex rounded-lg  px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10'>

            {/* ------- Left Side ------- */}
            <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
                <div className='text-xs sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-black'>
                    <p>Find & book trusted </p>
                    <p>hospitals near you</p>
                    <p className='mt-4'>quick, easy, and</p>
                    <p className='mt-4'> hassle-free healthcare</p><p> while you travel!</p>
                </div>
                <button
                    onClick={() => { navigate('/login'); scrollTo(0, 0); }}
                    className="bg-white border border-gray-300 shadow-lg shadow-gray-400/50 text-sm sm:text-base text-black px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all ring-1 ring-gray-300 hover:ring-gray-500"
                >
                    Create account
                </button>

            </div>

            {/* ------- Right Side ------- */}
            <img className='absolute bottom-50 mr-100 -z-10' src={assets.appointment_img} alt="" />
        </div>
    )
}

export default Banner