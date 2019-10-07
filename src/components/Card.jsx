import React from "react";
import { useTrail, animated } from "react-spring";
import "../styles/landing.css";

const items = ["max", "rosen"];
const whereTo = ["video", "photo", "design", "collage", "gooftown"];

const config = { mass: 5, tension: 3500, friction: 400 };

function Card() {
  const trail = useTrail(items.length, {
    config,
    delay: 1200,
    yy: 0,
    height: 130,
    from: { yy: 105, height: 0 }
  });
  const trail4 = useTrail(whereTo.length, {
    config,
    delay: 1650,
    yy: 0,
    height: 35,
    opacity: 1,
    from: { yy: 10, height: 0, opacity: 0 }
  });

  return (
    <div>
      <div className="headerWrapper">
        <header className="landingHeader">
          {trail.map(({ yy, height, ...rest }, index) => (
            <animated.div
              key={items[index]}
              className={"landing" + items[index]}
              style={{
                ...rest,
                transform: yy.interpolate(yy => `translate3d(0,${yy}%,0)`)
              }}
            >
              <animated.div style={{ height }}>{items[index]}</animated.div>
            </animated.div>
          ))}
        </header>
        <div className="informationalContainer">
          <div className="centerContainer">
            <div className="ipsumContainer">
              <div className="rosenIpsum">DIRECTOR</div>
            </div>
            <div className="whereToContainer">
              {trail4.map(({ yy, height, ...rest }, index) => (
                <animated.div
                  className="whereTo"
                  style={{
                    ...rest,
                    transform: yy.interpolate(yy => `translate3d(0,${yy}px,0)`)
                  }}
                >
                  <animated.div style={{ height }}>
                    <a className="whereToLink">{whereTo[index]}</a>
                  </animated.div>
                </animated.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
