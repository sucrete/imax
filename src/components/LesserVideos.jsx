import React from "react";
function LesserVideos(props) {
  return (
    <div
      className="lesserVideo"
      style={{
        width: "48%",
        height: "48%"
      }}
    >
      <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
        <iframe
          id="ytplayer"
          type="text/html"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
          src={props.vidSource}
          frameborder="0"
          allowfullscreen
        />
      </div>
      <p className="videoDescriptionSmaller">{`[${props.vidDescription}]`}</p>
    </div>
  );
}
export default LesserVideos;
