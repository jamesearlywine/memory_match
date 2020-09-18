import React, { useState } from "react";
import GameBoardComponent from "./components/GameBoard.component";

import AppConfig from "./config/AppConfig";
import "./App.css";

function App(props) {
  const matchCardDeck = AppConfig.MatchCardsConfig.matchCardDeck;
  const [cards, setCards] = useState(matchCardDeck.cards.slice(0));
  const [gameNumber, setGameNumber] = useState(0);

  const shuffle = () => {
    matchCardDeck.shuffle();
    setCards(matchCardDeck.cards.slice(0));
  };

  const newGame = () => {
    setGameNumber(gameNumber + 1);
    shuffle();
  };

  return (
    <div className="App">
      <header>
        <h1>Memory Match</h1>
      </header>
      <div>
        <button onClick={newGame}>New Game</button>
      </div>
      <GameBoardComponent cards={cards} key={gameNumber} />
    </div>
  );
}

export default App;
