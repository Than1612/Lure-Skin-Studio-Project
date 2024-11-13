import React, { useEffect, useState } from "react";
import "./Hero.css";
import img1 from "../attachments/attachments2/img10.png";
import img2 from "../attachments/img1.png";
import img3 from "../attachments/attachments1/i11.png";

const slides = [
  {
    eachSlide: `url(${img1})`,
    title: "Summer Glow",
    description:
      "Experience the warmth and brightness of summer fashion with our latest collection. Perfect for sunny days and breezy evenings.",
  },
  {
    eachSlide: `url(${img2})`,
    title: "Timeless Elegance",
    description:
      "Embrace classic, understated style with designs that stand the test of time. Explore our elegant and minimalistic pieces.",
  },
  {
    eachSlide: `url(${img3})`,
    title: "Bold Expressions",
    description:
      "Unleash your creativity and make a statement with vibrant colors and unique patterns. Stand out in modern fashion.",
  }
];

const Hero = () => {
  const [active, setActive] = useState(0);
  const [transitioning, setTransitioning] = useState(true);

  const max = slides.length;

  const intervalBetweenSlides = () =>
    setActive(active === max - 1 ? 0 : active + 1);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);
      intervalBetweenSlides();
    }, 3000); // Updated interval to 3 seconds

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
              <h2 className="section-title">{item.title}</h2>
              <p className="caption">{item.description}</p>
              <div className="btn-left btn-swiper">
                <a href="/products" className="btn">
                  Shop Collection
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ul className="dots-container">
        {slides.map((_, index) => (
          <li className={isActive(index) + " dots"} key={index}>
            <button onClick={() => setActive(index)}>
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
