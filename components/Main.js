import React from "react";
import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

const Main = (props) => {
  const { results } = props;
  return (
    <FlipMove className="main__container--item">
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
  );
};

export default Main;
