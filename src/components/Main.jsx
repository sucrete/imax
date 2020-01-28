import React from "react";
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
  let { path, url } = useRouteMatch();
  return (
    <div>
      <Router>
        <section className="sideNavigation">
          {routes.map((value, index) => {
            return (
              <Link
                style={{ display: "block", textTransform: "capitalize" }}
                to={`${url}/${value}`}
              >
                {value}
              </Link>
            );
          })}
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
