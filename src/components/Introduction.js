import "./style/Introduction.css";
import picProfile from "../assets/images/picProfile.png";

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
        <div className="flex-center">
          <img src={picProfile} width="35%" />
          <div className="two-circle">
          <div className="big-circle">

          </div>
          <div className="big-circle">

          </div>
          </div>
          <div className="three-circles">
            
            </div>

        </div>
      </div>
    </div>
  );
}

export default Introduction;
