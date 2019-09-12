import React from "react";
import { useSpring, animated } from "react-spring";
import "../card.css";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 20}px,${y / 20}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 18 + 35}px,${y / 18 - 100}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 15 - 175}px,${y / 15 - 55}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 11}px,${y / 11 + 35}px,0)`;

function Card() {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 }
  }));
  return (
    <div
      class="container2"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <animated.div
        class="blob"
        style={{ transform: props.xy.interpolate(trans1) }}
      >
        🀐㎇㎭㎉╍╳⏧⚜⚜
      </animated.div>

      <animated.div
        class="blocky"
        style={{ transform: props.xy.interpolate(trans2) }}
      >
        ░▒▓▓▉▊▜▔▀╏╻▍
      </animated.div>

      <animated.div
        class="cloud"
        style={{ transform: props.xy.interpolate(trans3) }}
      >
        ✺
      </animated.div>

      <animated.div
        class="scripty"
        style={{ transform: props.xy.interpolate(trans4) }}
      >
        ؅؄࿐
      </animated.div>
    </div>
  );
}
export default Card;
