import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className='flex flex-col md:flex-row flex-wrap rounded-lg px-6 md:px-10 lg:px-20 '>

            {/* --------- Header Left --------- */}
            <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
                <p className='text-3xl md:text-4xl lg:text-5xl text-black font-semibold leading-tight md:leading-tight lg:leading-tight'>
                    Your Journey<br />  Our Care
                </p>
                <div className='flex flex-col md:flex-row items-center gap-3 text-black text-sm font-light'>
                    <img className='w-28' src={assets.group_profiles} alt="" />
                    <p>Seamlessly connect travel and healthcare, <br className='hidden sm:block' /> ensuring a safe and worry-free journey with easy access to medical support wherever you go.</p>
                </div>
                <a href='#speciality' className='flex items-center gap-2 bg-[#f7952c] px-8 py-3 rounded-full text-black font-bold text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
                    Book appointment <img className='w-3' src={assets.arrow_icon} alt="" />
                </a>
            </div>

            {/* --------- Header Right --------- */}
            <div className='md:w-1/2 relative'>
                <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" />
            </div>
        </div>
    )
}

export default Header