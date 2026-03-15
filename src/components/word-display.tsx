type WordDisplayProps = {
  wordToGuess: string;
  usedLetters: string[];
};

export const WordDisplay = ({ wordToGuess, usedLetters }: WordDisplayProps) => {
  return (
    // Affichage du mot caché
    <div className="word-display">
      {wordToGuess.split('').map((letter, index) => (
        // le key index c'est pour le react car il a besoin pour les iterations
        <span key={index} className="letter">
          {usedLetters.includes(letter) ? letter : " __"}
        </span>
      ))}
    </div>
  );
};
