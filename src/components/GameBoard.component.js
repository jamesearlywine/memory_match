import React, { useEffect, useState } from "react";
import MatchCardComponent from "./MatchCard.component";

import "./GameBoard.component.css";

const useGameState = () => {
  const [cardsSelected, setCardsSelected] = useState([]);
  const [cardsCompleted, setCardsCompleted] = useState([]);

  const setCardSelected = (card) => {
    if (cardsSelected.indexOf(card) !== -1) {
      setCardsSelected(cardsSelected.filter((_card) => _card !== card));
    } else {
      setCardsSelected(cardsSelected.concat([card]));
    }
  };

  useEffect(() => {
    const firstCard = cardsSelected[0];
    const secondCard = cardsSelected[1];

    if (firstCard && secondCard && firstCard.matches(secondCard)) {
      setCardsCompleted(cardsCompleted.concat(cardsSelected));
      setCardsSelected(
        cardsSelected.filter(
          (cardSelected) =>
            cardSelected !== firstCard && cardSelected !== secondCard
        )
      );
    } else {
      if (cardsSelected.length > 1) {
        setTimeout(() => setCardsSelected([]), 1000);
      }
    }
  }, [cardsSelected, cardsCompleted]);

  return { cardsSelected, cardsCompleted, setCardSelected, setCardsSelected };
};

const GameBoardComponent = (props) => {
  const { cardsSelected, cardsCompleted, setCardSelected } = useGameState();

  const isBoardDisabled = cardsSelected.length > 1;

  const onClickCard = (card) => {
    setCardSelected(card);
  };

  return (
    <div className="game-board">
      {props.cards.map((card) => (
        <MatchCardComponent
          key={card.id}
          matchCard={card}
          isSelected={cardsSelected.includes(card)}
          isCompleted={cardsCompleted.includes(card)}
          isDisabled={isBoardDisabled}
          onClickCard={onClickCard}
        />
      ))}
    </div>
  );
};

export default GameBoardComponent;
