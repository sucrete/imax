// <------ MAIN.JSX --------->

import React, { useEffect } from "react";
import { useTrail, animated } from "react-spring";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  useRouteMatch,
  withRouter
} from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "../styles/main.css";
import Photo from "./Photo";
import Video from "./Video";
import Collage from "./Collage";
import Design from "./Design";
import Gooftown from "./Gooftown";
import About from "./About";
const config = { mass: 4, tension: 3400, friction: 320 };
const routes = ["about", "video", "photo", "design", "collage", "gooftown"];
const topRoutes = [
  { path: "/about", name: "About", Component: About },
  { path: "/video", name: "Video", Component: Video },
  { path: "/photo", name: "Photo", Component: Photo },
  { path: "/design", name: "Design", Component: Design },
  { path: "/collage", name: "Collage", Component: Collage },
  { path: "/gooftown", name: "Gooftown", Component: Gooftown }
];
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

  let match = useRouteMatch();
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
                  <svg height="45" width="45" className="svg-1">
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
                      as={NavLink}
                      style={{ height }}
                      key={`/${routes[index]}`}
                      className="navLink"
                      to={`${match.url}/${routes[index]}`}
                    >
                      {routes[index]}
                    </Link>
                  </animated.div>
                ))}
              </nav>
            </div>
          </section>
          <section className="mainContent">
            {trail4.map(({ yy, ...rest }) => (
              <animated.div
                style={{
                  ...rest,
                  transform: yy.interpolate(yy => `translate3d(0,${yy}px,0)`)
                }}
              >
                {topRoutes.map(({ path, Component }) => (
                  <Route key={path} path={`${match.path + path}`}>
                    {({ match }) => (
                      <CSSTransition
                        in={match != null}
                        timeout={300}
                        classNames="mainRoute"
                        unmountOnExit
                      >
                        <div className="mainRoute">
                          <Component />
                        </div>
                      </CSSTransition>
                    )}
                  </Route>
                ))}
                {/* <Route path={`${match.path}/about`}>
                  <About />
                </Route>
                <Route path={`${match.path}/video`}>
                  <Video />
                </Route>

                <Route path={`${match.path}/photo`}>
                  <Photo />
                </Route>

                <Route path={`${match.path}/design`}>
                  <Design />
                </Route>

                <Route path={`${match.path}/collage`}>
                  <Collage />
                </Route>

                <Route path={`${match.path}/gooftown`}>
                  <Gooftown />
                </Route> */}
              </animated.div>
            ))}
          </section>
        </Router>
      </div>

      <style jsx>{`
        html {
          background-color: rgb(34, 34, 34);
        }
        .App {
          height: 100vh;
        }
        h2 {
          color: #a8b293;
        }
      `}</style>
    </div>
  );
}
export default withRouter(Main);
