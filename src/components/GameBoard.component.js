import React from "react";
import MatchCardComponent from "./MatchCard.component";

import "./GameBoard.component.css";

const GameBoard = (props) => {
  return (
    <div className="game-board">
      {props.cards.map((card) => (
        <MatchCardComponent key={card.id} matchCard={card} />
      ))}
    </div>
  );
};

export default GameBoard;
