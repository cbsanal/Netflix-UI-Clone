import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import daredevilImg from "../images/daredevil-bg.png";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <section className="features">
      <div className="category">
        <span>Series</span>
        <select name="genre" id="genre">
          <option value="adventure">Adventure</option>
          <option value="comedy">Comedy</option>
          <option value="horror">Horror</option>
        </select>
      </div>
      <img src={daredevilImg} alt="daredevil-bg-img" />
      <div className="info">
        <iframe
          src="https://www.youtube.com/embed/jAy6NJ_D5vU"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
          className="daredevil-video-img"
        />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          placeat ullam, rerum dolorem asperiores voluptate praesentium dolor,
          labore quia dolores itaque quis!
        </span>
        <div className="buttons">
          <Link to="/watch" className="play">
            <PlayArrowIcon className="play-icon" />
            <span>Play</span>
          </Link>
          <button className="more">
            <InfoOutlinedIcon className="info-icon" />
            <span>Info</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
