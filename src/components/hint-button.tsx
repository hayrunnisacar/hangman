type HintButtonProps = {
  wordToGuess: string;
  usedLetters: string[];
  clickedLetter: (letter: string) => void;
  disabled: boolean;
};

export const HintButton = ({ wordToGuess, usedLetters, clickedLetter, disabled }: HintButtonProps) => {
  const getHint = () => {
    const remaining = wordToGuess.split('').filter(l => !usedLetters.includes(l));
    if (remaining.length > 0) {
      const randomLetter = remaining[Math.floor(Math.random() * remaining.length)];
      clickedLetter(randomLetter);
    }
  };

  return (
    <button
      className="btn-hint"
      onClick={getHint}
      disabled={disabled}
    >
      Besoin d'un indice ?
    </button>
  );
};
