type GameStatusProps = {
  won: boolean;
  lost: boolean;
  wordToGuess: string;
};

// Destructuration
export const GameStatus = ({ won, lost, wordToGuess }: GameStatusProps) => {
  return (
    <>
      {lost && <h2 className="msg-lost">Perdu ! Le mot était : {wordToGuess}</h2>}
      {won && <h2 className="msg-won">Bravo ! Vous avez gagné !</h2>}
    </>
  );
};
