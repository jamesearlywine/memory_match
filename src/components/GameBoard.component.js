import React from "react";
import MatchCardComponent from "./MatchCard.component";

import "./GameBoard.component.css";

const GameBoardComponent = (props) => {
  return (
    <div className="game-board">
      {props.cards.map((card) => (
        <MatchCardComponent key={card.id} matchCard={card} />
      ))}
    </div>
  );
};

export default GameBoardComponent;
