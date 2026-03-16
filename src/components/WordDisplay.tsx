type WordDisplayProps = {
  wordToGuess: string;
  usedLetters: string[];
};

export const WordDisplay = ({ wordToGuess, usedLetters }: WordDisplayProps) => {
  return (
    <div className="word-display">
      {wordToGuess.split('').map((letter, index) => (
        <span key={index} className="letter">
          {usedLetters.includes(letter) ? letter : " __"}
        </span>
      ))}
    </div>
  );
};
