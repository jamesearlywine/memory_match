import React, { useEffect, useState } from "react";
import MatchCardComponent from "./MatchCard.component";

import "./GameBoard.component.css";

const useGameState = () => {
  const [cardsSelected, setCardsSelected] = useState([]);
  const [cardsCompleted, setCardsCompleted] = useState([]);
  const [incorrectGuessesCount, setIncorrectGuessesCount] = useState(0);

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
      setCardsCompleted(cardsCompleted.concat([firstCard, secondCard]));
      setCardsSelected(
        cardsSelected.filter((card) => !cardsCompleted.includes(card))
      );
    } else if (cardsSelected.length > 1) {
      setTimeout(() => setCardsSelected([]), 850);
      setIncorrectGuessesCount(incorrectGuessesCount + 1);
    }
  }, [cardsSelected, cardsCompleted]);

  return { cardsSelected, cardsCompleted, setCardSelected, setCardsSelected, incorrectGuessesCount };
};

const GameBoardComponent = (props) => {
  const { cardsSelected, cardsCompleted, setCardSelected, incorrectGuessesCount } = useGameState();

  const isBoardDisabled = cardsSelected.length > 1;

  const onClickCard = (card) => {
    if (isBoardDisabled) return;
    setCardSelected(card);
  };

  useEffect(() => {
    props.onIncorrectGuess(incorrectGuessesCount);
  }, [incorrectGuessesCount])

  return (
      <div className="game-board">
        {props.cards.map((card) => (
          <MatchCardComponent
            key={card.id}
            matchCard={card}
            isFaceUp={
              cardsSelected.includes(card) || cardsCompleted.includes(card)
            }
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
