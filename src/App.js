import React from "react";
import MatchCardComponent from "./components/MatchCard.component";
import "./App.css";
import ENVIRONMENT from "./environment";

function App() {
  const randomIndex = Math.floor(
    Math.random() * ENVIRONMENT.matchCardsAvailable.length
  );
  const matchCard = ENVIRONMENT.matchCardsAvailable[randomIndex];

  return (
    <div className="App">
      <MatchCardComponent matchCard={matchCard} />
    </div>
  );
}

export default App;
