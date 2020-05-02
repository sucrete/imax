import React, { useEffect } from "react";
import LesserVideos from "./LesserVideos";

//   import { useTrail, animated } from "react-spring";
import "../styles/main.css";
import allYouNeedIsLikes from "../assets/AllYouNeedIsLikes.jpg";
import clickBait from "../assets/ClickBait.jpg";
import oneDayAtDisney from "../assets/OneDayAtDisney2.jpg";
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
              <img className="firstVideoImg" src={oneDayAtDisney} />
              <p className="videoDescription">
                <span className="noteHeader">Disney+</span>
                <br />
                editor on 14 of 52 episodes
              </p>
            </div>
            <div className="lesserVideosContainer">
              <div className="lesserVideo">
                <img src={allYouNeedIsLikes} />
                <p className="videoDescriptionSmaller">
                  <span className="noteHeader">Vice News Tonight on HBO</span>
                  <br /> producer / director / cinematographer / co-editor
                </p>
              </div>
              <div className="lesserVideo">
                <img src={clickBait} />
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
          margin-right: 25px;
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
      `}</style>
    </section>

    // <div className="tabs">

    //   <section className="subsection">
    //     <div className="firstVideo">
    //       <img src={oneDayAtDisney} />
    //       <p className="videoDescription">
    //         [Disney+, editor on 14 of 52 episodes]
    //       </p>
    //     </div>
    //     <div className="lesserVideosContainer">
    //       <div className="lesserVideo">
    //         <img src={allYouNeedIsLikes} />
    //         <p className="videoDescriptionSmaller">
    //           [Vice News Tonight on HBO, producer / director / cinematographer /
    //           co-editor]
    //         </p>
    //       </div>
    //       <div className="lesserVideo">
    //         <img src={clickBait} />
    //         <p className="videoDescriptionSmaller">
    //           [Vice News Tonight on HBO; producer / director /
    //           co-cinematographer / co-editor]
    //         </p>
    //       </div>
    //     </div>
    //   </section>

    //   <section className="subsection">
    //     <div className="lesserVideosContainer">{narrativeVids}</div>
    //   </section>

    //   <section className="subsection">
    //     <div className="lesserVideosContainer">{visualVids}</div>
    //   </section>

    //   <section className="subsection">
    //     <div className="lesserVideosContainer">{promoVids}</div>
    //   </section>
    // </div>
  );
}
export default Video;
