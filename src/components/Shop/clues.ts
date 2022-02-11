const getClue = () => {
  const clues = [
    "Don't stop believing!",
    "It's less about the destination and more about the journey.",
    "The journey of a thousand miles begins with one step.",
    "Success is a journey, not a destination. The doing is often more important than the destination.",
    "The only journey is the one within",
    "I wonder why they named the first cave Juliet?",
    "Life is a journey, and every chapter is very interesting.",
  ];
  const clue = clues[Math.floor(Math.random() * clues.length)];
  return clue;
};

export default getClue;
