import React from "react";
import "./MatchCard.component.css";

const MatchCardComponent = (props) => {
  const onClick = (event) => {
    if (props.isDisabled) return;
    props.onClickCard(props.matchCard);
  };

  return (
    <div className="match-card-container no-select">
      <div
        className={`match-card clickable
            ${props.isSelected || props.isCompleted ? "face-up" : null}
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
