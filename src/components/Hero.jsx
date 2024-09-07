import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import img1 from "../attachments/attachments2/img10.png";
import img2 from "../attachments/img1.png";


const Hero = () => {
    const images = [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    ];

    return (
        <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${img1})`, height:"140vh",backgroundRepeat:"no-repeat",backgroundSize:"cover" }}>
                    <span>Summer Glow</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${img2})`, height:"140vh",backgroundRepeat:"no-repeat",backgroundSize:"cover" }}>
                    <span>Summer Glow</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${img1})`, height:"140vh",backgroundRepeat:"no-repeat",backgroundSize:"cover" }}>
                    <span>Summer Glow</span>
                </div>
            </div>
        </Slide>
    );
};

export default Hero;