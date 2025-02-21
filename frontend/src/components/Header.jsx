import React from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Header = () => {

    const navigate = useNavigate()
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
                <div className='flex justify-center items-center space-x-4'>
                    <button onClick={() => navigate('/login')} className='bg-[#f7952c] text-black font-bold px-8 py-3 rounded-full hidden md:block'>Create account</button>
                    <button onClick={() => navigate('/flowchart')} className='bg-[#f7952c] text-black font-bold px-8 py-3 rounded-full hidden md:block'>FLOWCHART</button>

                </div>


            </div>

            {/* --------- Header Right --------- */}
            <div className='md:w-1/2 relative'>
                <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" />
            </div>
        </div>
    )
}

export default Header