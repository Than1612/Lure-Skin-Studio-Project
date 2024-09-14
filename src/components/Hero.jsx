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
  const max = slides.length;

  const intervalBetweenSlides = () =>
    setActive(active === max - 1 ? 0 : active + 1);

  useEffect(() => {
    const interval = setInterval(() => intervalBetweenSlides(), 3000);
    return () => clearInterval(interval);
  });

  const nextOne = () => setActive((active + 1) % max);

  const prevOne = () => setActive((active - 1 + max) % max);

  const isActive = (value) => active === value && "active";

  const setSliderStyles = () => {
    const transition = active * -100;

    return {
      width: slides.length * 100 + "vw",
      transform: "translateX(" + transition + "vw)",
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
          ></div>
        ))}
      </div>
      <button type="button" className="arrows prev" onClick={() => prevOne()}>
        <svg fill="#FFFFFF" width="50" height="50" viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </button>
      <button type="button" className="arrows next" onClick={() => nextOne()}>
        <svg fill="#FFFFFF" height="50" viewBox="0 0 24 24" width="50">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </button>
      <ul className="dots-container">
        {slides.map(
          (
            silde,
            index // check index
          ) => (
            <li className={isActive(index) + " dots"} key={index}>
              <button onClick={() => setActive(index)}>
                <span>&#9679;</span>
              </button>
            </li>
          )
        )}
      </ul>
    </section>
  );
};

export default Hero;
