import React from "react";
import { useTrail, animated } from "react-spring";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
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
      <section syle={{ zIndex: "999" }}>
        <Link style={{ display: "block" }} to={`${url}/video`}>
          Video
        </Link>

        <Link style={{ display: "block" }} to={`${url}/photo`}>
          Photo
        </Link>

        <Link style={{ display: "block" }} to={`${url}/design`}>
          Design
        </Link>

        <Link style={{ display: "block" }} to={`${url}/collage`}>
          Collage
        </Link>

        <Link style={{ display: "block" }} to={`${url}/gooftown`}>
          Gooftown
        </Link>
      </section>
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
    </div>
  );
}
export default Main;
