import React, { useEffect } from "react";
import LesserVideos from "./LesserVideos";

//   import { useTrail, animated } from "react-spring";
import "../styles/main.css";
import allYouNeedIsLikes from "../assets/AllYouNeedIsLikes.jpg";
import clickBait from "../assets/ClickBait.jpg";
import oneDayAtDisney from "../assets/OneDayAtDisney2.jpg";
import playButton from "../assets/playButton.svg";

function Video() {
  useEffect(() => {
    function Tabs(options) {
      var tabs = document.querySelector(options.el);
      var initCalled = false;
      var tabNavigation = tabs.querySelector(".c-tabs-nav");
      var tabNavigationLinks = tabs.querySelectorAll(".c-tabs-nav__link");
      var tabContentContainers = tabs.querySelectorAll(".c-tab");

      var marker = options.marker ? createNavMarker() : false;

      var activeIndex = 0;

      function init() {
        if (!initCalled) {
          initCalled = true;

          for (var i = 0; i < tabNavigationLinks.length; i++) {
            var link = tabNavigationLinks[i];
            clickHandlerSetup(link, i);
          }

          if (marker) {
            setMarker(tabNavigationLinks[activeIndex]);
          }
        }
      }

      function clickHandlerSetup(link, index) {
        link.addEventListener("click", function(e) {
          e.preventDefault();
          goToTab(index);
        });
      }

      function goToTab(index) {
        if (
          index >= 0 &&
          index != activeIndex &&
          index <= tabNavigationLinks.length
        ) {
          tabNavigationLinks[activeIndex].classList.remove("is-active");
          tabNavigationLinks[index].classList.add("is-active");

          tabContentContainers[activeIndex].classList.remove("is-active");
          tabContentContainers[index].classList.add("is-active");

          if (marker) {
            setMarker(tabNavigationLinks[index]);
          }

          activeIndex = index;
        }
      }

      function createNavMarker() {
        var marker = document.createElement("div");
        marker.classList.add("c-tab-nav-marker");
        tabNavigation.appendChild(marker);
        return marker;
      }

      function setMarker(element) {
        marker.style.left = element.offsetLeft + "px";
        marker.style.width = element.offsetWidth + "px";
      }

      return {
        init: init,
        goToTab: goToTab
      };
    }

    var m = new Tabs({
      el: "#tabs",
      marker: true
    });

    m.init();
  });
  const numberLeft = new Array(3);
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
  return (
    <section id="page">
      <div id="tabs" className="c-tabs">
        <div className="c-tabs-nav">
          <a href="#;" className="c-tabs-nav__link is-active">
            doc
          </a>
          <a href="#;" className="c-tabs-nav__link">
            narrative
          </a>
          <a href="#;" className="c-tabs-nav__link">
            visual
          </a>
          <a href="#;" className="c-tabs-nav__link">
            promo
          </a>
          <div className="c-tab-nav-marker"></div>
        </div>

        <div className="c-tab is-active">
          <div className="c-tab__content">
            <div className="firstVideo">
              <a
                href="https://www.youtube.com/watch?v=c3dukvXxtsc"
                target="_blank"
              >
                <div className="imageWrapper">
                  <div className="mask"></div>
                  <img
                    className="firstVideoImg videoThumb"
                    src={oneDayAtDisney}
                  />
                  <img src={playButton} className="playButton-lrg" />
                </div>
              </a>
              <p className="videoDescription">
                <span className="noteHeader">Disney+</span>
                <br />
                editor on 14 of 52 episodes
              </p>
            </div>
            <div className="lesserVideosContainer">
              <div className="lesserVideo">
                <a
                  href="https://www.youtube.com/watch?v=W3IKyyd53yQ"
                  target="_blank"
                >
                  <div className="imageWrapper">
                    <div className="mask"></div>
                    <img
                      className="lesserVideoImg videoThumb"
                      src={allYouNeedIsLikes}
                    />
                    <img src={playButton} className="playButton-lrg" />
                  </div>
                </a>
                <p className="videoDescriptionSmaller">
                  <span className="noteHeader">Vice News Tonight on HBO</span>
                  <br /> producer / director / cinematographer / co-editor
                </p>
              </div>
              <div className="lesserVideo">
                <a
                  href="https://www.youtube.com/watch?v=pMaoSw1sv_Q"
                  target="_blank"
                >
                  <div className="imageWrapper">
                    <div className="mask"></div>
                    <img
                      className="lesserVideoImg videoThumb"
                      src={clickBait}
                    />
                    <img src={playButton} className="playButton-lrg" />
                  </div>
                </a>
                <p className="videoDescriptionSmaller">
                  <span className="noteHeader">Vice News Tonight on HBO</span>
                  <br />
                  producer / director / co-cinematographer / co-editor
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="c-tab">
          <div className="c-tab__content">
            <h2>Narrative</h2>
            <p>
              lorem ipsum set dolor amet lorem ipsum set dolor amet lorem ipsum
              set dolor amet lorem ipsum set dolor amet lorem ipsum set dolor
              amet lorem ipsum set dolor ametlorem ipsum set dolor ametlorem
              ipsum set dolor
            </p>
          </div>
        </div>

        <div className="c-tab">
          <div className="c-tab__content">
            <h2>Visual</h2>
            <p>
              lorem ipsum set dolor amet lorem ipsum set dolor amet lorem ipsum
              set dolor amet lorem ipsum set dolor amet lorem ipsum set dolor
              amet lorem ipsum set dolor ametlorem ipsum set dolor ametlorem
              ipsum set dolor amet lorem ipsum set dolor amet lorem ipsum set
              dolor amet lorem ipsum set dolor amet lorem ipsum set dolor amet
              lorem ipsum set dolor amet lorem ipsum set dolor amet lorem ipsum
              set dolor amet
            </p>
          </div>
        </div>
        <div className="c-tab">
          <div className="c-tab__content">
            <h2>Promotional</h2>
            <p>
              lorem ipsum set dolor amet lorem ipsum set dolor amet lorem ipsum
              set dolor amet lorem ipsum set dolor amet lorem ipsum set dolor
              amet lorem ipsum set dolor ametlorem ipsum set dolor ametlorem
              ipsum set dolor amet lorem ipsum set dolor amet lorem ipsum set
              dolor amet lorem ipsum set dolor amet lorem ipsum set dolor amet
              lorem ipsum set dolor amet lorem ipsum set dolor amet lorem ipsum
              set dolor amet
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .mask,
        .playButton-lrg {
          position: absolute;
        }
        .imageWrapper {
          position: relative;
        }
        .imageWrapper:hover .playButton-lrg {
          opacity: 1;
        }
        .videoThumb {
          border-radius: 3px;
        }
        .playButton-lrg {
          z-index: 50;
          top: 17px;
          right: 17px;
          width: 55px;
          height: auto;
          opacity: 0;
          transition: opacity 200ms ease;
        }

        .mask {
          background: linear-gradient(
            to bottom,
            hsl(0, 0%, 0%) 0%,
            hsla(0, 0%, 0%, 0.884) 7.3%,
            hsla(0, 0%, 0%, 0.774) 13.2%,
            hsla(0, 0%, 0%, 0.669) 17.8%,
            hsla(0, 0%, 0%, 0.571) 21.6%,
            hsla(0, 0%, 0%, 0.479) 24.8%,
            hsla(0, 0%, 0%, 0.393) 27.9%,
            hsla(0, 0%, 0%, 0.315) 31%,
            hsla(0, 0%, 0%, 0.244) 34.6%,
            hsla(0, 0%, 0%, 0.182) 39%,
            hsla(0, 0%, 0%, 0.128) 44.5%,
            hsla(0, 0%, 0%, 0.083) 51.4%,
            hsla(0, 0%, 0%, 0.047) 60.1%,
            hsla(0, 0%, 0%, 0.021) 70.9%,
            hsla(0, 0%, 0%, 0.005) 84.1%,
            hsla(0, 0%, 0%, 0) 100%
          );
          // backdrop-filter: blur(2px);
          transition: opacity 200ms ease;
          opacity: 0;
          width: 100%;
          height: 100%;
          z-index: 44;
          border-top-left-radius: 3px;
          border-top-right-radius: 3px;
        }
        .mask:hover {
          opacity: 0.3;
        }

        .noteHeader {
          font-family: "Criteria Demi", sans-serif;
          color: #4b423b;
        }
        .videoDescriptionSmaller {
          width: 100%;
          font-size: 0.8em;
        }
        .lesserVideosContainer {
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          margin: 0 auto;
          justify-content: space-between;
        }
        .lesserVideo {
          width: 48%;
        }
        .lesserVideo img {
          width: 100%;
        }
        .lesserVideo .imageWrapper .playButton-lrg {
          width: 55px;
        }
        h2 {
          font-size: 2em;
          color: #90b8ad;
        }
        .firstVideo {
          padding: 1em 0em;
          width: 100%;
          margin: 0 auto;
        }
        .firstVideoImg {
          width: 100%;
          height: auto;
        }
        body {
          font-family: "Criteria Regular", sans-serif;
          color: #fff;
          background-image: linear-gradient(135deg, #349bc7 0%, #236dcf 100%);
        }
        #page {
          width: 100%;
          margin: 0 auto;
          min-height: 100vh;
        }

        #tabs {
          padding-top: 40px;
        }

        .c-tabs-nav {
          list-style: none;
          padding: 0;
          margin: 0 auto;
          position: relative;
          margin-bottom: 10px;
          display: flex;
          justify-content: center;
        }

        .c-tabs-nav__link {
          text-decoration: none;
          color: #1b1816;
          cursor: pointer;
          opacity: 0.7;
          margin: 0px 10px 0px 10px;
          padding: 10px 15px;
        }

        .c-tabs-nav__link.is-active {
          opacity: 1;
        }

        /**
       * Tab
       */
        .c-tab {
          display: none;
          width: 100%;
        }

        .c-tab.is-active {
          display: block;
        }

        .c-tab__content {
          width: 100%;
          animation: showTab 300ms ease-in-out both;
          margin: 0 auto;
          margin-top: 3em;
        }
        .c-tab__content p {
          font-family: "Criteria Regular", sans-serif;
          color: #a39c97;
          font-size: 0.95em;
          line-height: 150%;
          letter-spacing: 0.04em;
          text-align: justify;
        }
        @keyframes showTab {
          from {
            opacity: 0;
            top: 5px;
          }
          to {
            opacity: 1;
            top: 0;
          }
        }

        .c-tab-nav-marker {
          min-height: 4px;
          background-color: #e3cbba;
          position: absolute;
          bottom: -10px;
          transition: all 0.3s ease-out;
        }
        .videoDescription,
        .videoDescriptionSmaller {
          text-align: left !important;
          line-height: 90%;
          margin-block-start: 0.9em;
          margin-block-end: 1.1em;
        }
      `}</style>
    </section>
  );
}
export default Video;
