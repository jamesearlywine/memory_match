import React, { useState } from "react";
import GameBoardComponent from "./components/GameBoard.component";

import AppConfig from "./config/AppConfig";
import "./App.css";

function App(props) {
  const matchCardDeck = AppConfig.MatchCardsConfig.matchCardDeck;
  const [cards, setCards] = useState(matchCardDeck.cards.slice(0));
  const [wrongCount, setWrongCount] = useState(-1);
  const [gameNumber, setGameNumber] = useState(0);

  const shuffle = () => {
    matchCardDeck.shuffle();
    setCards(matchCardDeck.cards.slice(0));
  };

  const newGame = () => {
    setWrongCount(-1);
    setGameNumber(gameNumber + 1);
    shuffle();
  };

  const onIncorrectGuess = (n) => {
    setWrongCount(n);
  };

  return (
    <div className="App">
      <header>
        <h1>Memory Match</h1>
      </header>
      <div>
        <div className="guess-count">Wrong: {wrongCount}</div>
        <button onClick={newGame}>New Game</button>
      </div>
      <GameBoardComponent cards={cards} onIncorrectGuess={onIncorrectGuess} key={gameNumber} />
    </div>
  );
}

export default App;
