import React from "react";
import LesserVideos from "./LesserVideos";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
//   import { useTrail, animated } from "react-spring";
import "../styles/main.css";
import Graphic from "./Graphic";
import allYouNeedIsLikes from "../assets/AllYouNeedIsLikes.jpg";
import clickBait from "../assets/ClickBait.jpg";
import oneDayAtDisney from "../assets/OneDayAtDisney2.jpg";
function Video() {
  let { url } = useRouteMatch();
  const allExtraVideos = {
    docVideos: [
      {
        source: "https://www.youtube.com/embed/gpq0BW7Lt1I",
        description: "Bloomberg, director / cinematographer / editor"
      },
      {
        source: "https://www.youtube.com/embed/W3IKyyd53yQ",
        description:
          "Vice News Tonight on HBO, producer / director / cinematographer / co-editor"
      }
      // {
      //   source: "https://www.youtube.com/embed/hEpmVNVBmlA",
      //   description: "Bloomberg, producer / director / cinematographer / editor"
      // }
      // {
      //   source: "https://www.youtube.com/embed/PxtSvNjwhIc",
      //   description: "Saving Mothers, editor"
      // },
      // {
      //   source: "https://www.youtube.com/embed/UkRSn6SaLVw",
      //   description: "Bloomberg, co-producer / cinematographer / editor"
      // },
      // {
      //   source: "https://www.youtube.com/embed/pMaoSw1sv_Q",
      //   description:
      //     "Vice News Tonight on HBO, producer / director / co-cinematographer / co-editor"
      // },
      // {
      //   source: "https://www.youtube.com/embed/XNQ0A48Eh1c",
      //   description: "Bloomberg, director / cinematographer / editor"
      // }
    ],
    narrativeVideos: [
      {
        source:
          "https://player.vimeo.com/video/91259909?title=0&byline=0&portrait=0",
        description:
          "short film, producer / writer / director / cinematographer / editor"
      },
      {
        source:
          "https://player.vimeo.com/video/17105762?title=0&byline=0&portrait=0",
        description:
          "short film, producer / writer / director / cinematographer / editor"
      },
      {
        source:
          "https://player.vimeo.com/video/13929772?title=0&byline=0&portrait=0",
        description: "short film, co-producer / writer / co-director / editor"
      },
      {
        source:
          "https://player.vimeo.com/video/144325903?title=0&byline=0&portrait=0",
        description: "short film, director / cinematographer / editor"
      },
      {
        source:
          "https://www.youtube.com/embed/videoseries?list=PLFvtQAdINl8SYnfOmaY-Gq5gc90_U4-VI",
        description: "web series, director / cinematographer / editor"
      },
      {
        source: "https://www.youtube.com/embed/je9j4IKRhbI",
        description: "short film, director / cinematographer / editor"
      },
      {
        source:
          "https://www.youtube.com/embed/videoseries?list=PLLv6h4AcoO1tJ3_gGhkYQLq3VTGfdMLXw",
        description: "web series, co-director / co-cinematographer"
      }
    ],
    visualVideos: [
      {
        source: "https://www.youtube.com/embed/7dIxUhRpFbE",
        description: "music video, director / cinematographer / editor"
      },
      {
        source:
          "https://player.vimeo.com/video/53358519?title=0&byline=0&portrait=0",
        description: "short film, director / cinematographer / editor"
      },
      {
        source: "https://www.youtube.com/embed/0Vy8AVWisiA",
        description: "music video, editor"
      },
      {
        source:
          "https://player.vimeo.com/video/126227887?title=0&byline=0&portrait=0",
        description: "short film, director / cinematographer / editor"
      }
    ],
    promoVideos: [
      {
        source:
          "https://player.vimeo.com/video/234086472?title=0&byline=0&portrait=0",
        description:
          "book trailer; producer / director / cinematographer / editor"
      },
      {
        source: "https://www.youtube.com/embed/QrUWg1mAIsw",
        description: "Showgasm promo; director / cinematographer / editor"
      },
      {
        source:
          "https://player.vimeo.com/video/224372771?title=0&byline=0&portrait=0",
        description:
          "book trailer; producer / director / cinematographer / editor"
      },
      {
        source:
          "https://player.vimeo.com/video/222937242?title=0&byline=0&portrait=0",
        description: "live show intro; director / cinematographer / editor"
      },
      {
        source:
          "https://player.vimeo.com/video/230542561?title=0&byline=0&portrait=0",
        description:
          "art show promo; producer / director / cinematographer / editor"
      },
      {
        source:
          "https://player.vimeo.com/video/225349394?title=0&byline=0&portrait=0",
        description: "live show promo; director / cinematographer / editor"
      },
      {
        source:
          "https://player.vimeo.com/video/190474505?title=0&byline=0&portrait=0",
        description: "Ivy promo; cinematographer / editor"
      },
      {
        source:
          "https://player.vimeo.com/video/129576853?title=0&byline=0&portrait=0",
        description: "producer / director / cinematographer / editor"
      },
      {
        source:
          "https://player.vimeo.com/video/132705369?title=0&byline=0&portrait=0",
        description: "Ivy promo; cinematographer / editor"
      }
    ]
  };
  const docVids = allExtraVideos.docVideos.map(route => (
    <LesserVideos
      vidSource={route.source}
      vidDescription={route.description}
    ></LesserVideos>
  ));
  const narrativeVids = allExtraVideos.narrativeVideos.map(route => (
    <LesserVideos
      vidSource={route.source}
      vidDescription={route.description}
    ></LesserVideos>
  ));
  const visualVids = allExtraVideos.visualVideos.map(route => (
    <LesserVideos
      vidSource={route.source}
      vidDescription={route.description}
    ></LesserVideos>
  ));
  const promoVids = allExtraVideos.promoVideos.map(route => (
    <LesserVideos
      vidSource={route.source}
      vidDescription={route.description}
    ></LesserVideos>
  ));
  const subRoutes = ["doc", "narrative", "visual", "promo"];
  return (
    <div>
      <div className="topBlock">
        <div id="canvasContainer">
          <Graphic />
          <div id="canvasOverlay"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 285 80"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <mask id="mask" x="0" y="0" width="100%" height="100%">
                <rect x="0" y="0" width="100%" height="100%" />
                <text x="5" y="63">
                  video
                </text>
              </mask>
            </defs>
            <rect id="sayhey" x="0" y="0" width="100%" height="100%" />
            <rect id="sayhey" x="0" y="0" width="100%" height="100%" />
          </svg>
        </div>
      </div>

      <div className="videoSubRoutesContainer">
        {subRoutes.map((aThing, id) => (
          <Link className="subRoute" key={id} to={`${url}/${aThing}`}>
            {aThing}
          </Link>
        ))}
      </div>
      <Route path={`${url}/doc`}>
        <div className="subsection">
          <div className="firstVideo">
            <img src={oneDayAtDisney} />
            <p className="videoDescription">
              [Disney+, editor on 14 of 52 episodes]
            </p>
          </div>
          <div className="lesserVideosContainer">
            <div className="lesserVideo">
              <img src={allYouNeedIsLikes} />
              <p className="videoDescriptionSmaller">
                [Vice News Tonight on HBO, producer / director / cinematographer
                / co-editor]
              </p>
            </div>
            <div className="lesserVideo">
              <img src={clickBait} />
              <p className="videoDescriptionSmaller">
                [Vice News Tonight on HBO; producer / director /
                co-cinematographer / co-editor]
              </p>
            </div>
          </div>
        </div>
      </Route>

      <Route path={`${url}/narrative`}>
        <div className="subsection">
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
          <div className="lesserVideosContainer">{narrativeVids}</div>
        </div>
      </Route>

      <Route path={`${url}/visual`}>
        <div className="subsection">
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
          <div className="lesserVideosContainer">{visualVids}</div>
        </div>
      </Route>

      <Route path={`${url}/promo`}>
        <div className="subsection">
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
          <div className="lesserVideosContainer">{promoVids}</div>
        </div>
      </Route>

      <style jsx>{``}</style>
    </div>
  );
}
export default Video;
