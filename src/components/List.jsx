import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import ListItem from "./ListItem";
import { useRef, useState, useEffect } from "react";
const List = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const listRef = useRef(null);

  useEffect(() => {
    const handleClick = (direction) => {
      const constainerChildren = listRef.current.children;
      const listOfItem = [...constainerChildren];
      if (direction === "left") {
        listOfItem.forEach((el) => {
          el.style.transform = `translateX(${slideNumber * 100}%) translateX(${
            slideNumber * 15
          }px)`;
        });
      } else {
        listOfItem.forEach((el) => {
          el.style.transform = `translateX(-${slideNumber * 100}%) translateX(${
            slideNumber * -15
          }px)`;
        });
      }
    };
    handleClick();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slideNumber]);
  return (
    <section className="list">
      <span className="list-title">Continue to watch</span>
      <div className="list-container">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() =>
            slideNumber > 0 ? setSlideNumber(slideNumber - 1) : {}
          }
          style={slideNumber !== 0 ? {} : { display: "none" }}
        />
        <div className="list-item-container" ref={listRef}>
          <ListItem slideClickNumber={slideNumber} />
          <ListItem slideClickNumber={slideNumber} />
          <ListItem slideClickNumber={slideNumber} />
          <ListItem slideClickNumber={slideNumber} />
          <ListItem slideClickNumber={slideNumber} />
          <ListItem slideClickNumber={slideNumber} />
          <ListItem slideClickNumber={slideNumber} />
          <ListItem slideClickNumber={slideNumber} />
          <ListItem slideClickNumber={slideNumber} />
          <ListItem slideClickNumber={slideNumber} />
          <ListItem slideClickNumber={slideNumber} />
          <ListItem slideClickNumber={slideNumber} />
          <ListItem slideClickNumber={slideNumber} />
          <ListItem slideClickNumber={slideNumber} />
          <ListItem slideClickNumber={slideNumber} />
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => setSlideNumber(slideNumber + 1)}
        />
      </div>
    </section>
  );
};

export default List;
