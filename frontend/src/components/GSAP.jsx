import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';
import { assets } from '../assets/assets';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

gsap.registerPlugin(ScrollTrigger);

const GSAP = () => {
    const carWrapperRef = useRef(null); // Ref for the car wrapper div

    useEffect(() => {
        const carWrapper = carWrapperRef.current;

        gsap.to(carWrapper, {
            x: "80vw", // Move car from left to right
            duration: 5, // Animation duration
            ease: "linear",
            scrollTrigger: {
                trigger: carWrapper,
                start: "top bottom",
                end: "top top",
                scrub: 1, // Smooth animation on scroll
            },
        });

    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Car Animation (Wrapped in a div for GSAP) */}
            <div ref={carWrapperRef} className="absolute bottom-20 left-0 w-100 h-100">
                <DotLottieReact
                    src={assets.Lottie}
                    loop
                    autoplay
                />
            </div>

            {/* Road Image */}
            <img
                src={assets.Road}
                alt="Road"
                className="absolute bottom-0 w-full h-screen object-cover z-[-1]"
            />
        </div>
    );
};

export default GSAP;
