import "./style/Introduction.css";
import picProfile from "../assets/images/picProfile.png";
import figma from "../assets/images/figma.png";
import node_js from "../assets/images/node_js.png";
import reacticon from "../assets/images/reacticon.png";
import sql from "../assets/images/sql.png";
import wordpress from "../assets/images/wordpress.png";



function Introduction() {
  return (
    <div className="container">
      <div className="text-title">
        <div className="text-welcome">
          <b className="text-gradient">Welcome</b>
          <p className="color-yellow">To My Website</p>
        </div>
        <div className="text-name">
          <h1 className="color-puple">HELLO I AM TAN</h1>
          <b className="color-pink">PARAMET</b>
          <p className="color-pink">CHUCHUMCHUEN</p>
        </div>

        <div className="introduction">
          <p>
            Hello, I am interested in <b>front end developer</b>. Aims to
            develop one's skills, develop new things, and have a better user
            experience. Increase work progress by learning the culture of the
            organization and working as a team to <b>grow together.</b>
          </p>
        </div>
      </div>

      <div className="img-title background-gradient">
        <div style={{ flexDirection: "column",marginLeft:'50px',marginRight:'50px', }} className="flex-center">
          <img src={picProfile} width="45%" />
          <div
            style={{
              justifyContent: "space-between",
              width: "500px",
              marginTop: "-60px",
            }}
            className="two-circle flex-center"
          >
            <div className="big-circle background-black circles  flex-center">
              <img width={"50px"} src={figma} />
            </div>
            <div className="big-circle background-black circles flex-center">
              <img width={"50px"} src={node_js} />
            </div>
          </div>
          <div
            style={{
              justifyContent: "space-between",
              width: "300px",
              marginTop: "5px",
            }}
            className="three-circles flex-center"
          >
            <div className="mini-circle background-black  flex-center">
              <img width={"25px"} src={wordpress} />
            </div>

            <div className="big-circle background-black circles flex-center">
              <img width={"50px"} src={reacticon} />
            </div>

            <div className="mini-circle background-black  flex-center">
              <img width={"25px"} src={sql} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
