import React from "react";
class Video extends React.Component {
  render() {
    return (
      <div>
        <h1 className="pageTitle">Video</h1>
        <hr />
        <div className="subsection" name="doc">
          <h2 className="subHeader">doc</h2>
          <div
            style={{ padding: "56.25% 0 0 0", position: "relative" }}
            className="firstVideo"
          >
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
              src="https://www.youtube.com/embed/c3dukvXxtsc"
              frameborder="0"
              allowfullscreen
            />
          </div>
          <p className="videoDescription">
            [Disney+, editor on 14 of 52 episodes]
          </p>
        </div>
        <div className="subsection" name="narrative">
          <h2 className="subHeader">narrative</h2>
          <div
            style={{ padding: "56.25% 0 0 0", position: "relative" }}
            className="firstVideo"
          >
            <iframe
              src="https://player.vimeo.com/video/289986054?title=0&byline=0&portrait=0"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
              }}
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
              loading="lazy"
            ></iframe>
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
          <p className="videoDescription">
            [short film, producer / writer / director / cinematographer /
            editor]
          </p>
        </div>

        <p></p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          minima iusto doloremque dolorem accusamus temporibus nisi ea adipisci
          harum! Dolores maxime magni quod a quos illum impedit nulla nemo
          quaerat!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          minima iusto doloremque dolorem accusamus temporibus nisi ea adipisci
          harum! Dolores maxime magni quod a quos illum impedit nulla nemo
          quaerat!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          minima iusto doloremque dolorem accusamus temporibus nisi ea adipisci
          harum! Dolores maxime magni quod a quos illum impedit nulla nemo
          quaerat!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          minima iusto doloremque dolorem accusamus temporibus nisi ea adipisci
          harum! Dolores maxime magni quod a quos illum impedit nulla nemo
          quaerat!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          minima iusto doloremque dolorem accusamus temporibus nisi ea adipisci
          harum! Dolores maxime magni quod a quos illum impedit nulla nemo
          quaerat!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          minima iusto doloremque dolorem accusamus temporibus nisi ea adipisci
          harum! Dolores maxime magni quod a quos illum impedit nulla nemo
          quaerat!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          minima iusto doloremque dolorem accusamus temporibus nisi ea adipisci
          harum! Dolores maxime magni quod a quos illum impedit nulla nemo
          quaerat!
        </p>
      </div>
    );
  }
}
export default Video;
