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

const config = { mass: 5, tension: 3500, friction: 400 };
const routes = ["about", "video", "photo", "design", "collage", "gooftown"];
const mainMax = ["Max"];
function Main() {
  const trail2 = useTrail(routes.length, {
    config,
    delay: 1800,
    yy: 0,
    height: 70,
    opacity: 1,
    from: { yy: 60, height: 0, opacity: 0 }
  });
  const trail7 = useTrail(mainMax.length, {
    config,
    delay: 1500,
    yy: 0,
    height: 35,
    opacity: 1,
    from: { yy: 50, height: 70, opacity: 0 }
  });
  let { url } = useRouteMatch();
  useEffect(() => {
    setTimeout(() => {
      const mainElement = document.getElementsByClassName("innerContainer")[0];
      mainElement.classList.toggle("hidden");
    }, 1500);
  });
  const mainRoutes = routes.map(route => (
    <Link
      className="navLink"
      to={`${url}/${route === "video" ? route + "/doc" : route}`}
    >
      {route}
    </Link>
  ));
  return (
    <div class="main">
      <div className="innerContainer hidden">
        <Router>
          <section className="topNavigation">
            {trail7.map(({ yy, height, ...rest }, index) => (
              <animated.div
                style={{
                  ...rest,
                  transform: yy.interpolate(yy => `translate3d(0,${yy}px,0)`)
                }}
              >
                <span style={{ height }} className="mainMax">
                  {mainMax[index]}
                </span>
              </animated.div>
            ))}

            <div class="inner">
              <svg height="45" width="45" class="svg-1">
                <path id="top" d="M7,17 L38,17" />
                <path id="bottom" d="M7,27 L38,27" />
              </svg>
              <nav role="navigation" id="navigationContainer">
                {mainRoutes}
              </nav>
            </div>
          </section>
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
