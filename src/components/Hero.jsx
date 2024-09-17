import React, { useEffect, useState } from "react";
import "./Hero.css";
import img1 from "../attachments/attachments2/img10.png";
import img2 from "../attachments/img1.png";

const slides = [
  {
    eachSlide: `url(${img1})`,
  },
  {
    eachSlide: `url(${img2})`,
  },
  {
    eachSlide:
      "url(https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)",
  },
];

const Hero = () => {
  const [active, setActive] = useState(0);
  const [transitioning, setTransitioning] = useState(true);

  const max = slides.length;
  
  const showPrevArrow = active > 0;
  const showNextArrow = active < max - 1;

  const intervalBetweenSlides = () => {
    if (active < max - 1) {
      setActive(active + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (active < max - 1) {
        setTransitioning(true);
        intervalBetweenSlides();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [active]);

  const isActive = (value) => active === value && "active";

  const setSliderStyles = () => {
    const transition = active * -100;
    return {
      width: slides.length * 100 + "vw",
      transform: `translateX(${transition}vw)`,
      transition: transitioning ? "transform 1s ease-in-out" : "none",
    };
  };

  const goToSlide = (index) => {
    if (index >= 0 && index < max) {
      setActive(index);
      setTransitioning(false);
    }
  };

  return (
    <section className="slider">
      <div className="wrapper" style={setSliderStyles()}>
        {slides.map((item, index) => (
          <div
            className="each-slide"
            key={index}
            style={{ backgroundImage: item.eachSlide }}
          >
            <div className="slide-content">
              <h2 className="section-title">Summer Glow</h2>
              <p className="caption">
                Tortor eget placerat arcu integer. Lectus fames egestas
                tincidunt aliquet vivamus nibh lorem nulla. This is Modern
                fashion ectus fames egestas tincidunt aliquet vivamus nibh lorem
                nulla.
              </p>
              <div className="btn-left btn-swiper">
                <a href="#" className="btn">
                  Shop Collection
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showPrevArrow && (
        <button className="arrow left-arrow" onClick={() => goToSlide(active - 1)}>
          &#9664; {/* Left Arrow */}
        </button>
      )}
      {showNextArrow && (
        <button className="arrow right-arrow" onClick={() => goToSlide(active + 1)}>
          &#9654; {/* Right Arrow */}
        </button>
      )}

      <ul className="dots-container">
        {slides.map((_, index) => (
          <li className={isActive(index) + " dots"} key={index}>
            <button onClick={() => goToSlide(index)}>
              <span
                className={`transition-transform duration-300 ${
                  active === index ? "text-gray-600 scale-125" : "text-gray-300"
                }`}
                style={{ fontSize: active === index ? "50px" : "40px" }}
              >
                &#9679;
              </span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Hero;
