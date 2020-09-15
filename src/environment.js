import MatchCard from "./components/MatchCard.class";

const ENVIRONMENT = {
  /**
   * Gameplay
   */
  // in seconds
  timeLimitPerMove: 30,

  /**
   * Cards
   */
  baseCardsAvatarUrl: "//localhost:3000/avatar_images/",
  matchCardsAvailable: [
    new MatchCard({
      name: "Sally Sue",
      avatarImageFilename: "sally_sue.jpg",
    }),
    new MatchCard({
      name: "Jimmy Joe",
      avatarImageFilename: "jimmy_joe.jpg",
    }),
    new MatchCard({
      name: "Sandy Jo",
      avatarImageFilename: "sandy_jo.jpg",
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

export default ENVIRONMENT;
