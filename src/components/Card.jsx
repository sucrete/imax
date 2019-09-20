import React from "react";
import { useTrail, useSpring, animated } from "react-spring";
import "../styles/landing.css";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 50}px,${y / 50 - 85}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 45 + 25}px,${y / 45 - 130}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 29 - 195}px,${y / 29 - 140}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 40 + 98}px,${y / 40 - 10}px,0)`;
const items = ["Max", "ROSEN"];
const config = { mass: 5, tension: 2000, friction: 500 };
function Card() {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 }
  }));
  const trail = useTrail(items.length, {
    config,
    delay: 700,
    opacity: 1,
    yy: 0,
    from: { opacity: 0, yy: 20 }
  });
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
          {trail.map(({ yy, ...rest }, index) => (
            <animated.div
              key={items[index]}
              className={"landing" + items[index]}
              style={{
                ...rest,
                transform: yy.interpolate(yy => `translate3d(0,${yy}px,0)`)
              }}
            >
              <animated.div>{items[index]}</animated.div>
            </animated.div>
          ))}
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
