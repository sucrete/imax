import React from "react";
class Gooftown extends React.Component {
  render() {
    return (
      <div>
        <h2>Gooftown</h2>
        <p className="contentBody">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore soluta
          fuga dolorum praesentium amet ad minima suscipit voluptate reiciendis
          accusamus?
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
export default Gooftown;
