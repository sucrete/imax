import React from "react";
import maxPic from "../assets/spaceToTheMax.jpg";
class Collage extends React.Component {
  render() {
    return (
      <div>
        <div className="topBlock">
          <div className="contentBlock">
            <h2>Your Boy</h2>
            <p className="contentBody">
              O my friend -- but it is too much for my strength -- I sink under
              the weight of the splendour of these visions! A wonderful serenity
              has taken possession of my entire soul, like these sweet mornings
              of spring which I enjoy with my whole heart. I am alone, and feel
              the charm of existence in this spot, which was created for the
              bliss of souls like mine.
            </p>
          </div>
          <div className="frameContainer">
            <div className="frame__outside">
              <div className="frame__inside">
                <div className="matte">
                  <div
                    className="picture"
                    style={{ backgroundImage: `url(${maxPic})` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .topBlock {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }
          .contentBlock {
            margin: 0 auto;
            width: 500px;
          }
          .contentBody {
          }
          .frameContainer {
            margin: 0 auto;
            // flex: 1;
          }
          .frame__outside {
            position: relative;
            background: #333;
            box-shadow: inset -0.5rem -0.5rem 1rem black;
            padding: 0.75rem;
            box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1),
              2px 2px 4px rgba(0, 0, 0, 0.2), 4px 4px 20px rgba(0, 0, 0, 0.2),
              20px 4px 32px rgba(0, 0, 0, 0.12),
              4px 30px 32px rgba(0, 0, 0, 0.12),
              8px 20px 20px rgba(0, 0, 0, 0.03);
          }

          .frame__inside {
            background: #333;
            box-shadow: inset 0.5rem 0.5rem 1rem black;
            padding: 0.75rem;
          }

          .matte {
            padding: 2.5rem;
            background: #fafafa;
            box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.2);
          }

          .picture {
            width: 250px;
            height: 380px;
            background-size: cover;
            background-position: center;
            box-shadow: inset 2px 2px 1px rgba(0, 0, 0, 0.2);
          }
        `}</style>
      </div>
    );
  }
}
export default Collage;
