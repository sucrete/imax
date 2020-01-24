import React from "react";
import { useTrail, animated } from "react-spring";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../styles/landing.css";

import Main from "./Main";

const items = ["max", "rosen"];
const whereTo = ["video", "photo", "design", "collage", "gooftown"];
const whoIsMax = new Array(7);
const config = { mass: 5, tension: 3500, friction: 400 };

function Card() {
  const trail = useTrail(items.length, {
    config,
    delay: 1200,
    yy: 0,
    height: 130,
    from: { yy: 105, height: 0 }
  });
  const trail2 = useTrail(whereTo.length, {
    config,
    delay: 1650,
    yy: 0,
    height: 35,
    opacity: 1,
    from: { yy: 20, height: 0, opacity: 0 }
  });
  const trail3 = useTrail(1, {
    config,
    delay: 2000,
    opacity: 1,
    from: { opacity: 0 }
  });
  const trail4 = useTrail(whoIsMax.length, {
    config,
    delay: 2200,
    yy: 0,
    height: 160,
    opacity: 1,
    from: { yy: 20, height: 0, opacity: 0 }
  });

  return (
    <Router>
      <Route exact path="/">
        <section></section>
        <div className="card">
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
                {trail3.map(({ ...rest }, index) => (
                  <animated.div
                    className="ipsumContainer"
                    style={{
                      ...rest
                    }}
                  >
                    {trail4.map(({ yy, height, ...rest }, index) => (
                      <animated.div
                        className="rosenIpsum"
                        style={{
                          ...rest,
                          transform: yy.interpolate(
                            yy => `translate3d(0,${yy}px,0)`
                          )
                        }}
                      ></animated.div>
                    ))}
                  </animated.div>
                ))}

                <div className="whereToContainer">
                  {trail2.map(({ yy, height, ...rest }, index) => (
                    <animated.div
                      className="whereTo"
                      style={{
                        ...rest,
                        transform: yy.interpolate(
                          yy => `translate3d(0,${yy}px,0)`
                        )
                      }}
                    >
                      <animated.div>
                        <Link
                          style={{ height }}
                          className="whereToLink"
                          to={`/${whereTo[index]}`}
                        >
                          {whereTo[index]}
                        </Link>
                      </animated.div>
                    </animated.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Route>
      <Route path="/main">
        <Main />
      </Route>
    </Router>
  );
}
export default Card;
