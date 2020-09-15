import React, { useState } from "react";
import "./MatchCard.component.css";

const MatchCardComponent = (props) => {
  const [isFaceUp, setIsFaceUp] = useState(false);

  const onClick = (event) => {
    setIsFaceUp(!isFaceUp);
  };

  return (
    <div className="match-card-container no-select">
      <div
        className={`match-card clickable
            ${isFaceUp ? "face-up" : null}
        `}
        onClick={onClick}
      >
        <div className="match-card-side match-card-side--face center-content-vertically">
          {props.matchCard.name}
        </div>
        <div className="match-card-side match-card-side--back center-content-vertically"></div>
      </div>
    </div>
  );
};

export default MatchCardComponent;
