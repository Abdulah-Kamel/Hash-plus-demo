import React from 'react';
import carsouel1 from "../assets/carsouel1.png";
import carsouel2 from "../assets/carsouel2.png";
import carsouel3 from "../assets/carsouel3.png";
import carsouel4 from "../assets/carsouel1.png";
import carsouel5 from "../assets/carsouel2.png";
import carsouel6 from "../assets/carsouel3.png";

const logos = [
    { src: carsouel1, alt: 'Partner Logo 1' },
    { src: carsouel2, alt: 'Partner Logo 2' },
    { src: carsouel3, alt: 'Partner Logo 3' },
    { src: carsouel4, alt: 'Partner Logo 4' },
    { src: carsouel5, alt: 'Partner Logo 5' },
    { src: carsouel6, alt: 'Partner Logo 6' },
];

const LogoCarousel = () => {
    return (
        <div className="bg-white py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
                    {logos.map((logo) => (
                        <img
                            key={logo.alt}
                            className="w-48 h-20 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                            src={logo.src}
                            alt={logo.alt}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LogoCarousel;