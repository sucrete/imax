import React, { useEffect } from "react";
import { useTrail, animated } from "react-spring";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import "../styles/main.css";
import Photo from "./Photo";
import Video from "./Video";
import Collage from "./Collage";
import Design from "./Design";
import Gooftown from "./Gooftown";
import About from "./About";
const config = { mass: 4, tension: 3400, friction: 320 };
const routes = ["about", "video", "photo", "design", "collage", "gooftown"];
const mainMax = ["Max", "Rosen"];
const bodyMovin = new Array(1);
function Main() {
  const trail1 = useTrail(mainMax.length, {
    config,
    delay: 1600,
    yy: 0,
    height: 35,
    opacity: 1,
    from: { yy: 25, height: 70, opacity: 0 }
  });
  const trail2 = useTrail(routes.length, {
    config,
    delay: 2100,
    yy: 0,
    height: 25,
    opacity: 1,
    from: { yy: 5, height: 0, opacity: 0 }
  });
  const trail3 = useTrail(bodyMovin.length, {
    config,
    delay: 2100,
    yy: 0,
    height: 25,
    opacity: 1,
    from: { yy: 5, height: 0, opacity: 0 }
  });
  const trail4 = useTrail(bodyMovin.length, {
    config,
    delay: 2300,
    yy: 0,
    opacity: 1,
    from: { yy: 40, opacity: 0 }
  });

  let { url } = useRouteMatch();
  useEffect(() => {
    setTimeout(() => {
      const mainElement = document.getElementsByClassName("innerContainer")[0];
      mainElement.classList.toggle("hidden");
    }, 1500);
  });
  return (
    <div class="main">
      <div className="innerContainer hidden">
        <Router>
          <section className="topNavigation">
            <div className="logo">
              {trail1.map(({ yy, height, ...rest }, index) => (
                <animated.div
                  style={{
                    ...rest,
                    transform: yy.interpolate(yy => `translate3d(0,${yy}px,0)`)
                  }}
                >
                  <span style={{ height }} className={"main" + mainMax[index]}>
                    {mainMax[index]}
                  </span>
                </animated.div>
              ))}
            </div>

            <div class="inner">
              {trail3.map(({ yy, height, ...rest }, index) => (
                <animated.div
                  style={{
                    ...rest,
                    transform: yy.interpolate(yy => `translate3d(0,${yy}px,0)`)
                  }}
                >
                  <svg height="45" width="45" class="svg-1">
                    <path id="top" d="M7,17 L38,17" />
                    <path id="bottom" d="M7,27 L38,27" />
                  </svg>
                </animated.div>
              ))}

              <nav role="navigation" id="navigationContainer">
                {trail2.map(({ yy, height, ...rest }, index) => (
                  <animated.div
                    style={{
                      ...rest,
                      transform: yy.interpolate(
                        yy => `translate3d(0,${yy}px,0)`
                      )
                    }}
                  >
                    <Link
                      style={{ height }}
                      className="navLink"
                      to={`${url}/${
                        routes[index] === "video"
                          ? routes[index] + "/doc"
                          : routes[index]
                      }`}
                    >
                      {routes[index]}
                    </Link>
                  </animated.div>
                ))}
              </nav>
            </div>
          </section>
          {trail4.map(({ yy, ...rest }, index) => (
            <animated.div
              style={{
                ...rest,
                transform: yy.interpolate(yy => `translate3d(0,${yy}px,0)`)
              }}
            >
              <section className="mainContent">
                <Route path={`${url}/video`}>
                  <Video />
                </Route>

                <Route path={`${url}/photo`}>
                  <Photo />
                </Route>

                <Route path={`${url}/design`}>
                  <Design />
                </Route>

                <Route path={`${url}/collage`}>
                  <Collage />
                </Route>

                <Route path={`${url}/gooftown`}>
                  <Gooftown />
                </Route>
                <Route path={`${url}/about`}>
                  <About />
                </Route>
              </section>
            </animated.div>
          ))}
        </Router>
      </div>

      <style jsx>{`
        html {
          background-color: rgb(34, 34, 34);
        }
      `}</style>
    </div>
  );
}
export default Main;
