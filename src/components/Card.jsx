import React from "react";
import { useTrail, animated } from "react-spring";
import "../styles/landing.css";

const items = ["Max", "Rosen"];
const whereTo = ["video", "photo", "design", "collage", "gooftown"];

const config = { mass: 5, tension: 3100, friction: 400 };

function Card() {
  const trail = useTrail(items.length, {
    config,
    delay: 1500,
    yy: 0,
    height: 130,
    from: { yy: 105, height: 0 }
  });
  const trail4 = useTrail(whereTo.length, {
    config,
    delay: 1950,
    yy: 0,
    height: 32,
    opacity: 1,
    from: { opacity: 0, yy: 15, height: 12 }
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
          {/* {trail.map(({ x, height, ...rest }, index) => (
            <animated.div
              key={items[index]}
              className="trails-text"
              style={{
                ...rest,
                transform: x.interpolate(x => `translate3d(0,${x}%,0)`)
              }}
            >
              <animated.div style={{ height }}>{items[index]}</animated.div>
            </animated.div>
          ))} */}
        </header>
        <div className="informationalContainer">
          <div className="centerContainer">
            <div className="ipsumContainer"></div>
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
          {/* <div className="locationAndYear">
            <div className="maxLocationContainer">
              {trail2.map(({ yy, ...rest }, index) => (
                <animated.div
                  className={"maxLocation" + index}
                  style={{
                    ...rest,
                    transform: yy.interpolate(yy => `translate3d(0,${yy}px,0)`)
                  }}
                >
                  <animated.div>{locationItems[index]}</animated.div>
                </animated.div>
              ))}
            </div>
            {spacerTrail.map(({ yy, ...rest }, index) => (
              <animated.div
                className="spacer"
                style={{
                  ...rest,
                  transform: yy.interpolate(yy => `translate3d(0,${yy}px,0)`)
                }}
              ></animated.div>
            ))}

            <div className="yearContainer">
              {trail2.map(({ yy, ...rest }, index) => (
                <animated.div
                  className={"year" + index}
                  style={{
                    ...rest,
                    transform: yy.interpolate(yy => `translate3d(0,${yy}px,0)`)
                  }}
                >
                  <animated.div>{year[index]}</animated.div>
                </animated.div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
      <div className="container2">
        {/* {trail3.map(({ yy, ...rest }, index) => (
                <animated.div
                  key={rosenIpsum[index]}
                  className={"rosenIpsum"}
                  style={{
                    ...rest,
                    transform: yy.interpolate(yy => `translate3d(0,${yy}px,0)`)
                  }}
                >
                  <animated.div>{rosenIpsum[index]}</animated.div>
                </animated.div>
              ))} */}
        <animated.div className="blob"></animated.div>

        <animated.div className="blocky">░▒▓</animated.div>
      </div>
    </div>
  );
}
export default Card;
