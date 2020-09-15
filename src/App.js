import React, { useState } from "react";
import GameBoard from "./components/GameBoard.component";

import AppConfig from "./config/AppConfig";
import "./App.css";

function App() {
  const matchCardDeck = AppConfig.MatchCardsConfig.matchCardDeck;
  const [cards, setCards] = useState(matchCardDeck.cards.slice(0));

  const shuffle = () => {
    matchCardDeck.shuffle();
    setCards(matchCardDeck.cards.slice(0));
  };

  return (
    <div className="App">
      <div>
        <button onClick={shuffle}>Shuffle Deck</button>
      </div>
      <GameBoard cards={cards} />
    </div>
  );
}

export default App;
