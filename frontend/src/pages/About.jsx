import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
    return (
        <div>
            <div className='text-center text-2xl pt-10 text-gray-500'>
                <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
            </div>
            <div className='my-10 flex flex-col md:flex-row gap-12'>
                <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
                <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
                    <p>At travelcare, we bridge the gap between travel and healthcare, ensuring you explore the world with confidence.
                    </p>
                    <p>Our platform provides seamless access to trusted medical services, travel assistance, and wellness support, no matter where your journey takes you. Whether it's routine care, emergency aid, or health tips for travelers, we prioritize your well-being so you can travel stress-free. With us, adventure meets assurance—because your health should never be a roadblock to your travels.
                    </p>
                    <b className='text-gray-800'>Our Vision</b>
                    <p>To redefine travel by integrating seamless healthcare access, ensuring every journey is safe, stress-free, and supported with reliable medical care anytime, anywhere.
                    </p>
                </div>
            </div>
            <div className='text-xl my-4'>
                <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
            </div>
            <div className='flex flex-col md:flex-row mb-20'>
                <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
                    <b>EFFICIENCY:</b>
                    <p>Seamlessly connecting travel and healthcare, we ensure quick, hassle-free access to medical support, so you can focus on your journey with peace of mind.</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
                    <b>CONVENIENCE:</b>
                    <p>We make travel worry-free by providing easy access to healthcare services anytime, anywhere. From medical assistance to wellness support, everything you need is just a click away, ensuring a smooth and stress-free journey.</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
                    <b>PERSONALIZATION:</b>
                    <p>We tailor healthcare solutions to fit your unique travel needs, ensuring you receive the right medical support whenever and wherever you need it. Your health, your journey—personalized for you.</p>
                </div>
            </div>
        </div>
    )
}

export default About
