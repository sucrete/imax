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

const config = { mass: 5, tension: 3500, friction: 400 };
const routes = ["video", "photo", "design", "collage", "gooftown"];
function Main() {
  const trail2 = useTrail(routes.length, {
    config,
    delay: 1000,
    yy: 0,
    height: 35,
    opacity: 1,
    from: { yy: 20, height: 0, opacity: 0 }
  });
  let { url } = useRouteMatch();

  useEffect(() => {
    // const subRoutes = ['doc','narrative','visual','promo'];
    const videoLink = document.getElementsByClassName("navLink")[0];
    const newSpan = document.createElement("div");
    newSpan.setAttribute("class", "videoArrow");
    videoLink.appendChild(newSpan);
    newSpan.addEventListener("mouseover", function(event) {
      event.target.style.backgroundColor = "yellow";
    });
    newSpan.addEventListener("mouseover", function(event) {
      event.target.style.backgroundColor = "rgba(0,0,0,.1)";
    });
    newSpan.addEventListener("mouseout", function(event) {
      event.target.style.backgroundColor = "transparent";
    });
    newSpan.addEventListener("click", function(event) {
      event.target.classList.toggle("turnt");
    });
    // const expandOnClick = function() {

    //   subRoutes.forEach()
    // }
  });

  return (
    <div className="main">
      <Router>
        <section className="sideNavigation">
          <div className="maxSpacer"></div>
          <div id="navigationContainer">
            {trail2.map(({ yy, height, ...rest }, index) => (
              <animated.div
                style={{
                  ...rest,
                  transform: yy.interpolate(yy => `translate3d(0,${yy}px,0)`)
                }}
              >
                <Link
                  style={{ height }}
                  className="navLink"
                  to={`${url}/${routes[index]}`}
                >
                  {routes[index]}
                </Link>
              </animated.div>
            ))}
          </div>
        </section>
        <section className="mainContent">
          <Route exact path={`${url}/video`}>
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
        </section>
      </Router>
    </div>
  );
}
export default Main;
