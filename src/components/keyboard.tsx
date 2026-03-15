const alphabet = "abcdefghijklmnopqrstuvwxyz";

const alphabetArray = alphabet.split("");

type KeyboardProps = {
  usedLetters: string[];
  clickedLetter: (letter: string) => void;
  disabled: boolean;
};

export const Keyboard = ({ usedLetters, clickedLetter, disabled }: KeyboardProps) => {
  return (
    <div className="keyboard">
      {alphabetArray.map((letter) => (
        <button
          key={letter}
          onClick={() => clickedLetter(letter)}
          disabled={disabled || usedLetters.includes(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};
