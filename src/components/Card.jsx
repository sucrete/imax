import React from "react";
import { useSpring, animated } from "react-spring";
import "../styles/landing.css";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 25}px,${y / 25 - 85}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 20 + 25}px,${y / 20 - 130}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 15 - 195}px,${y / 15 - 140}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 15 + 100}px,${y / 15 - 15}px,0)`;

function Card() {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 }
  }));
  return (
    <div
      className="container2"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <svg version="1.1" id="layer">
        <defs>
          <filter id="watercolor">
            <feTurbulence
              result="TURBULENCE"
              baseFrequency=".59"
              numOctaves="30"
              seed="300"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="TURBULENCE"
              scale="120"
            />
          </filter>
        </defs>
      </svg>
      <animated.div
        className="blob"
        style={{ transform: props.xy.interpolate(trans1) }}
      >
        <span className="blobBaby">🀐㎇</span>㎭㎉╍╳⏧
      </animated.div>

      <animated.div
        className="blocky"
        style={{ transform: props.xy.interpolate(trans2) }}
      >
        <span className="blockyBaby">▜▓</span>
        ░▒▓
      </animated.div>
      <div className="headerWrapper">
        <header className="landingHeader">
          <span className="landingMax">Max</span>
          <span className="landingRosen">ROSEN</span>
        </header>
      </div>
      <animated.div
        className="cloud"
        style={{ transform: props.xy.interpolate(trans3) }}
      >
        ✺
      </animated.div>

      <animated.div
        className="scripty"
        style={{ transform: props.xy.interpolate(trans4) }}
      >
        ؅؄࿐
      </animated.div>
    </div>
  );
}
export default Card;
