import React, { useEffect, useState } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import img1 from "../attachments/attachments2/img10.png";
import img2 from "../attachments/img1.png";

const images = [
    img1,
    img2,
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
];

const Hero = () => {
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex(prevIndex => (prevIndex + 1) % images.length);
    };

    const handleRadioChange = (event) => {
        setIndex(Number(event.target.value));
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000); // Change slide every 5 seconds
        return () => clearInterval(timer); // Cleanup interval on unmount
    }, []);

    return (
        <div>
            <Slide index={index} canSwipe={false}>
                {images.map((image, idx) => (
                    <div className="each-slide-effect" key={idx}>
                        <div style={{ backgroundImage: `url(${image})`, height: "100vh", backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className='flex flex-col justify-center items-center'>
                            <h1 className='uppercase text-7xl prata-regular' style={{ color: "#F1F1F0" }}>
                                Summer Glow
                            </h1>
                            <p className='opacity-75 prata-regular text-white w-2/5'>
                                Tortor eget placerat arcu integer. Lectus fames egestas tincidunt aliquet vivamus nibh lorem nulla. This is Modern fashion ectus fames egestas tincidunt aliquet vivamus nibh lorem nulla.
                            </p>
                        </div>
                    </div>
                ))}
            </Slide>

            <div className="flex justify-center mt-4">
                {images.map((_, idx) => (
                    <label key={idx} className="mx-2">
                        <input 
                            type="radio" 
                            name="slide-selector" 
                            value={idx} 
                            checked={index === idx} 
                            onChange={handleRadioChange} 
                            className="hidden" 
                        />
                        <span 
                            className={`inline-block w-4 h-4 rounded-full border-2 cursor-pointer 
                                ${index === idx ? 'bg-blue-500 border-blue-500' : 'bg-white border-gray-300'}`} 
                        />
                    </label>
                ))}
            </div>
        </div>
    );
};

export default Hero;
