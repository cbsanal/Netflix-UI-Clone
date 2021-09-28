import { useState, useRef } from "react";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownAltOutlined,
} from "@material-ui/icons";

const ListItem = ({ slideClickNumber }) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  const listItem = useRef(null);
  const placeHolder = useRef(null);
  const coverImg = useRef(null);
  const hoverOnElement = () => {
    const distance = listItem.current.offsetLeft + slideClickNumber * 75 - 30;
    listItem.current.style.position = "absolute";
    coverImg.current.style.display = "none";
    placeHolder.current.style.position = "static";
    listItem.current.style.left = `${distance}px`;
    setIsHovered(true);
  };
  const hoverOffElement = () => {
    listItem.current.style.position = "static";
    placeHolder.current.style.position = "absolute";
    coverImg.current.style.display = "block";
    setIsHovered(false);
  };
  return (
    <>
      <div ref={placeHolder} className="placeholder"></div>
      <div
        className="list-item"
        ref={listItem}
        onMouseEnter={hoverOnElement}
        onMouseLeave={hoverOffElement}
      >
        <img
          ref={coverImg}
          src="https://images.pexels.com/photos/7955853/pexels-photo-7955853.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
        />
        {isHovered && (
          <>
            <video
              className="small-video"
              src={trailer}
              autoPlay={true}
              loop
              muted
            />
            <div className="item-info">
              <div className="icons">
                <PlayArrow />
                <Add />
                <ThumbUpAltOutlined />
                <ThumbDownAltOutlined />
              </div>
              <div className="item-info-top">
                <span>1 hour 14 minutes</span>
                <span>+16</span>
                <span>1999</span>
              </div>
              <div className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur quae voluptatem pariatur magnam delectus, explicabo
                maxime mollitia ad quam veniam!
              </div>
              <div className="genre">Action</div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ListItem;
