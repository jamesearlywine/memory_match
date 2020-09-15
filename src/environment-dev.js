import MatchCard from "./components/MatchCard.class";

const GAME_CONFIG = {
  /**
   * Gameplay
   */
  // in seconds
  timeLimitPerMove: 30,

  /**
   * Cards
   */
  baseCardsAvatarUrl: "http://localhost:3000/avatar_images/",
  cardsAvailable: [
    new MatchCard({
      name: "Sally Sue",
      avatarImageFilename: "sally_sue.jpg",
    }),
    new MatchCard({
      name: "Jimmy Joe",
      avatarImageFilename: "jimmy_joe.jpg",
    }),
    new MatchCard({
      name: "Sandy McSanders",
      avatarImageFilename: "sandy_mcsanderson.jpg",
    }),
    new MatchCard({
      name: "Willie Wanka",
      avatarImageFilename: "willy_wanka.jpg",
    }),
    new MatchCard({
      name: "Paulie",
      avatarImageFilename: "paulie.jpg",
    }),
    new MatchCard({
      name: "Velvet",
      avatarImageFilename: "velvet.jpg",
    }),
    new MatchCard({
      name: "Cristal",
      avatarImageFilename: "cristal.jpg",
    }),
    new MatchCard({
      name: "Tarzan",
      avatarImageFilename: "tarzan.jpg",
    }),
  ],
};

export default GAME_CONFIG;
