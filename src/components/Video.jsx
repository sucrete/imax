import React from "react";
class Video extends React.Component {
  render() {
    return (
      <div>
        <h1>Videos ere!</h1>
        <p>
          O my friend -- but it is too much for my strength -- I sink under the
          weight of the splendour of these visions! A wonderful serenity has
          taken possession of my entire soul, like these sweet mornings of
          spring which I enjoy with my whole heart. I am alone, and feel the
          charm of existence in this spot, which was created for the bliss of
          souls like mine.
        </p>
        <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
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
          ></iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
        <p>
          <a href="https://vimeo.com/289986054">Thread</a> from{" "}
          <a href="https://vimeo.com/maxrosen">Max Rosen</a> on{" "}
          <a href="https://vimeo.com">Vimeo</a>.
        </p>
        <p>
          An office assistant at a culture website comes down with a mysterious
          illness.
          <br />
          starring Lorelei Ramirez, Ana Fabrega, Beth Hoyt, Colin Burgess &amp;
          John Early
          <br />
          produced, written, directed, shot &amp; edited by Max Rosen
          <br />
          digital effects by Garret Layman
          <br />
          original score by Alec Lambert
          <br />
          sound mix by Frank Flaherty
          <br />
          <br />
          //October, 2019//
        </p>
      </div>
    );
  }
}
export default Video;
