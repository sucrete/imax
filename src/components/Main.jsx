import React from "react";
import { useTrail, animated } from "react-spring";
// import ReactDOM from "react-dom";
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
          <Route exact path={`${url}/video/doc`}>
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
      <style jsx>{`
        body {
          background-color: rgb(34, 34, 34);
        }
        section.sideNavigation a,
        section.sideNavigation a:visited,
        .pageTitle,
        .subHeader,
        p {
          color: white;
        }
        p.videosDescriptionSmaller {
          font-size: 1em;
        }
      `}</style>
    </div>
  );
}
export default Main;
