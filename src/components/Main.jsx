import React from "react";
import { useTrail, animated } from "react-spring";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import "../styles/landing.css";
import Photo from "./Photo";
import Video from "./Video";
import Collage from "./Collage";
import Design from "./Design";
import Gooftown from "./Gooftown";

const config = { mass: 5, tension: 3500, friction: 400 };

function Main() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2>Main</h2>
      <Router>
        <section>
          <Link style={{ display: "block" }} to="/video">
            Video
          </Link>

          <Link style={{ display: "block" }} to="/photo">
            Photo
          </Link>

          <Link style={{ display: "block" }} to="/design">
            Design
          </Link>

          <Link style={{ display: "block" }} to="/collage">
            Collage
          </Link>

          <Link style={{ display: "block" }} to="/gooftown">
            Gooftown
          </Link>
        </section>
        <Route path="/video">
          <Video />
        </Route>

        <Route path="/photo">
          <Photo />
        </Route>

        <Route path="/design">
          <Design />
        </Route>

        <Route path="/collage">
          <Collage />
        </Route>

        <Route path="/gooftown">
          <Gooftown />
        </Route>
      </Router>
    </div>
  );
}
export default Main;
