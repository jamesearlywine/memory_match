import React from "react";
import "./MatchCard.component.css";

const MatchCardComponent = (props) => {
  const onClick = (event) => {
    props.onClickCard(props.matchCard);
  };

  return (
    <div className="match-card-container no-select">
      <div
        className={`match-card clickable
            ${props.isFaceUp ? "face-up" : null}
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
