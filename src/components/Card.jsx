import React from "react";
import { useTrail, useSpring, animated } from "react-spring";
import "../styles/landing.css";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 50}px,${y / 50 - 105}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 45 + 25}px,${y / 45 - 150}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 29 - 195}px,${y / 29 - 150}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 40 + 88}px,${y / 40 - 9}px,0)`;
const trans5 = (x, y) => `translate3d(${x / 12 - 325}px,${y / 12 + 190}px,0)`;

const items = ["Max", "ROSEN"];
const locationItems = ["new york,", "new york"];
const year = ["HA HA", "BEAUTY"];
const rosenIpsum = ["CINEMATOGRAPHER", "DIRECTOR", "EDITOR"];
const whereTo = ["video", "photo", "design", "collage", "gooftown"];
const config = { mass: 5, tension: 3100, friction: 400 };
function Card() {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 }
  }));
  const trail = useTrail(items.length, {
    config,
    delay: 350,
    opacity: 1,
    yy: 0,
    from: { opacity: 0, yy: 20 }
  });
  const trail2 = useTrail(locationItems.length, {
    config,
    delay: 1450,
    opacity: 1,
    yy: 0,
    from: { opacity: 0, yy: 5 }
  });
  const trail3 = useTrail(rosenIpsum.length, {
    config,
    delay: 2000,
    opacity: 1,
    yy: 0,
    from: { opacity: 0, yy: 10 }
  });
  const trail4 = useTrail(whereTo.length, {
    config,
    delay: 750,
    opacity: 1,
    yy: 0,
    from: { opacity: 0, yy: 10 }
  });
  const spacerTrail = useTrail(1, {
    config,
    delay: 1350,
    opacity: 1,
    yy: 0,
    from: { opacity: 0, yy: 5 }
  });
  return (
    <div onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
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
        <div className="informationalContainer">
          <div className="centerContainer">
            <div className="ipsumContainer">
              {trail3.map(({ yy, ...rest }, index) => (
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
              ))}
            </div>
            <div className="whereToContainer">
              {trail4.map(({ yy, ...rest }, index) => (
                <animated.div
                  className="whereTo"
                  style={{
                    ...rest,
                    transform: yy.interpolate(yy => `translate3d(0,${yy}px,0)`)
                  }}
                >
                  <animated.div>
                    <a className="whereToLink">{whereTo[index]}</a>
                  </animated.div>
                </animated.div>
              ))}
            </div>
          </div>
          <div className="locationAndYear">
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
          </div>
        </div>
      </div>
      <div className="container2">
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

        <animated.div
          className="cloud"
          style={{ transform: props.xy.interpolate(trans3) }}
        ></animated.div>

        <animated.div
          className="scripty"
          style={{ transform: props.xy.interpolate(trans4) }}
        >
          ؅؄࿐
        </animated.div>
        <animated.div
          className="glob"
          style={{ transform: props.xy.interpolate(trans5) }}
        ></animated.div>
      </div>
    </div>
  );
}
export default Card;
