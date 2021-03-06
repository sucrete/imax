import React from "react";
class Collage extends React.Component {
  render() {
    return (
      <div className="collageView">
        <h2>Collage</h2>
        <p className="contentBody">
          O my friend -- but it is too much for my strength -- I sink under the
          weight of the splendour of these visions! A wonderful serenity has
          taken possession of my entire soul, like these sweet mornings of
          spring which I enjoy with my whole heart. I am alone, and feel the
          charm of existence in this spot, which was created for the bliss of
          souls like mine.
        </p>
        <style jsx>{`
          h2 {
            font-size: 2em;
            font-family: "Criteria Regular", sans-serif;
            padding-bottom: 0.5em;
          }
        `}</style>
      </div>
    );
  }
}
export default Collage;
