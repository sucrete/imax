import React from "react";
import { useTrail, animated } from "react-spring";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../styles/landing.css";
import { CSSTransition } from "react-transition-group";
import Main from "./Main";

import Gooftown from "../assets/babyGoof.jpg";
import Design from "../assets/designLettering.mp4";
import Video from "../assets/julioVideo.mp4";
import Photo from "../assets/kewtPhoto.jpg";
import Collage from "../assets/mirrorCollage.jpg";

const items = ["max", "rosen"];
const whereTo = ["video", "photo", "design", "collage", "gooftown"];
const config = { mass: 5, tension: 3500, friction: 400 };

function Landing() {
  const trail = useTrail(items.length, {
    config,
    delay: 1000,
    yy: 0,
    height: 100,
    from: { yy: 90, height: 0 }
  });
  const trail2 = useTrail(whereTo.length, {
    config,
    delay: 1650,
    yy: 0,
    height: 42,
    opacity: 1,
    from: { yy: 20, height: 0, opacity: 0 }
  });
  //FROM MAIN (THE GOOD ONE)
  // config,
  // delay: 1000,
  // yy: 0,
  // height: 35,
  // opacity: 1,
  // from: { yy: 20, height: 0, opacity: 0 }
  return (
    <Router>
      <Route exact path={process.env.PUBLIC_URL + "/"}>
        {({ match }) => (
          <CSSTransition
            in={match != null}
            timeout={1500}
            classNames="card"
            unmountOnExit
          >
            <div className="card">
              <img className="collageImage revealer" src={Collage} />
              <img className="photog revealer" src={Photo} />
              <img className="goofImage revealer" src={Gooftown} />
              <video className="designVid revealer" loop muted autoPlay>
                <source src={Design} type="video/mp4" />
              </video>
              <video className="vidVid revealer" loop muted autoPlay>
                <source src={Video} type="video/mp4" />
              </video>
              <div className="secondCard">
                <div className="headerWrapper">
                  <header className="landingHeader">
                    {trail.map(({ yy, height, ...rest }, index) => (
                      <animated.div
                        key={items[index]}
                        className={"landing" + items[index]}
                        style={{
                          ...rest,
                          transform: yy.interpolate(
                            yy => `translate3d(0,${yy}%,0)`
                          )
                        }}
                      >
                        <div style={{ height }}>{items[index]}</div>
                      </animated.div>
                    ))}
                  </header>
                  <div className="informationalContainer">
                    <div className="centerContainer">
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
                            <Link
                              style={{ height }}
                              className="whereToLink underlined underlined--thick"
                              to={"/" + `m/${whereTo[index]}`}
                            >
                              {whereTo[index]}
                            </Link>
                          </animated.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CSSTransition>
        )}
      </Route>
      <Route path={"/m"}>
        <Main />
      </Route>
    </Router>
  );
}
export default Landing;
