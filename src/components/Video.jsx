import React from "react";
function Video() {
  const allExtraVideos = {
    docVideos: [
      {
        source: "https://www.youtube.com/embed/gpq0BW7Lt1I",
        description: "Bloomberg, director / cinematographer / editor"
      }
    ],
    narrativeVideos: [],
    visualVideos: [],
    promoVideos: []
  };
  const docVideos = allExtraVideos.docVideos.map(route => (
    <div className="lesserVideo" style={{ width: "45%", height: "45%" }}>
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
          src={route.source}
          frameborder="0"
          allowfullscreen
        />
      </div>
      <p className="videoDescriptionSmaller">{`[${route.description}]`}</p>
    </div>
  ));
  return (
    <div>
      <h1 className="pageTitle">Video</h1>
      <hr />
      {/* ***************************************

                  DOC BELOW HERE

        *************************************** */}
      <div className="subsection" name="doc">
        <h2 className="subHeader">doc</h2>
        <div className="firstVideo">
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
              src="https://www.youtube.com/embed/c3dukvXxtsc"
              frameborder="0"
              allowfullscreen
            />
          </div>
          <p className="videoDescription">
            [Disney+, editor on 14 of 52 episodes]
          </p>
        </div>
        <div className="lesserVideosContainer">{docVideos}</div>
      </div>
      {/* ***************************************

                  NARRATIVE BELOW HERE

        *************************************** */}
      <div className="subsection" name="narrative">
        <h2 className="subHeader">narrative</h2>
        <div className="firstVideo">
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
              loading="lazy"
            ></iframe>
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
          <p className="videoDescription">
            [short film, producer / writer / director / cinematographer /
            editor]
          </p>
        </div>
      </div>
      {/* ***************************************

                  VISUAL BELOW HERE

        *************************************** */}
      <div className="subsection" name="visual">
        <h2 className="subHeader">visual</h2>
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
            src="https://www.youtube.com/embed/IXPw5wgyg6g"
            frameborder="0"
            allowfullscreen
          />
        </div>
        <p className="videoDescription">
          [music video, director / co-cinematographer / editor]
        </p>
      </div>
      {/* ***************************************

                  PROMO BELOW HERE

        *************************************** */}
      <div className="subsection" name="promo">
        <h2 className="subHeader">promo</h2>
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
            src="https://www.youtube.com/embed/qsT_yXLi2j4"
            frameborder="0"
            allowfullscreen
          />
        </div>
        <p className="videoDescription">
          [Showgasm promo, director / cinematographer / editor]
        </p>
      </div>
      <style jsx>{`
        section.mainContent div p,
        .videoDescription {
          color: white;
        }
        :root {
          background-color: rgb(34, 34, 34);
        }
        .videoDescriptionSmaller {
          font-size: 1em;
        }
      `}</style>
    </div>
  );
}
export default Video;
