import React, { useState } from "react";
import GameBoardComponent from "./components/GameBoard.component";

import AppConfig from "./config/AppConfig";
import "./App.css";

function App(props) {
  const matchCardDeck = AppConfig.MatchCardsConfig.matchCardDeck;
  const [cards, setCards] = useState(matchCardDeck.cards.slice(0));

  const shuffle = () => {
    matchCardDeck.shuffle();
    setCards(matchCardDeck.cards.slice(0));
  };

  return (
    <div className="App">
      <header>
        <h1>Memory Match</h1>
      </header>
      <div>
        <button onClick={shuffle}>Shuffle Deck</button>
      </div>
      <GameBoardComponent cards={cards} />
    </div>
  );
}

export default App;
