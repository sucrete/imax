import React from "react";
import maxPic from "../assets/spaceToTheMax.jpg";
class Collage extends React.Component {
  render() {
    return (
      <div>
        <div className="topBlock">
          <div className="titleWrapper">
            <h1 className="pageTitle">about</h1>
          </div>
          <div className="imagesWrapper">
            <img style={{ height: "300px", width: "auto" }} src={maxPic} />
          </div>
        </div>

        <p>
          O my friend -- but it is too much for my strength -- I sink under the
          weight of the splendour of these visions! A wonderful serenity has
          taken possession of my entire soul, like these sweet mornings of
          spring which I enjoy with my whole heart. I am alone, and feel the
          charm of existence in this spot, which was created for the bliss of
          souls like mine.
        </p>
      </div>
    );
  }
}
export default Collage;
