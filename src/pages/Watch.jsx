import { ArrowBackOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <Link to="/Home">
          <ArrowBackOutlined className="back-arrow" />
          Home
        </Link>
      </div>
      <video
        className="video-big"
        src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"
        autoPlay
        progress
        controls
        loop
        muted
      ></video>
    </div>
  );
};

export default Watch;
