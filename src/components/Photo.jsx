import React from "react";
class Photo extends React.Component {
  render() {
    return (
      <div>
        <h2>Photo</h2>
        <p className="contentBody">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          minima iusto doloremque dolorem accusamus temporibus nisi ea adipisci
          harum! Dolores maxime magni quod a quos illum impedit nulla nemo
          quaerat!
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
export default Photo;
