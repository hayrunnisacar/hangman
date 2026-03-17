import { useState, useEffect } from 'react';
import './styles/App.css';
import { HangmanDrawn } from './components/HangmanDrawn';
import { WordDisplay } from './components/WordDisplay';
import { GameStatus } from './components/GameStatus';
import { HintButton } from './components/HintButton';
import { Keyboard } from './components/Keyboard';

export default function App() {
  const [wordToGuess, setWordToGuess] = useState("");
  const [usedLetters, setUsedLetters] = useState<string[]>([]);

  const errors = usedLetters.filter((letter) => 
    !wordToGuess.includes(letter)
  ).length;

  const lost = errors >= 6;

  const won = wordToGuess !== "" && wordToGuess.split('').every(letter => usedLetters.includes(letter));


  // API Connection
  const fetchWord = async () => {
    const url = "http://localhost:3333";
    try {
      const response = await fetch(url, {
        // Properties of the api
        method: 'POST',
        body: JSON.stringify({ locale: 'fr-FR' })
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const result = await response.json();
      console.log(result);
      // Word recorded in the table
      setWordToGuess(result.word);

    } catch (error) {
      console.error((error as Error).message);
    }
  };

  //CLicked letter
  const clickedLetter = (letter: string) => {
    setUsedLetters([...usedLetters, letter]);
  };

  // Clicked letter
  // const clickedLetter = (letter: string) => {
  //   const intermediateArray = [];
  //   for (let i = 0; i < usedLetters.length; i++) {
  //     intermediateArray.push(usedLetters[i]);
  //   }
  //   intermediateArray.push(letter);
  //   setUsedLetters(intermediateArray);
  // };


  // New game
  const newPart = () => {
    setUsedLetters([]);
    fetchWord();
  };

  useEffect(() => {
    fetchWord();
  }, []);

  return (
    <div className="game-container">
      <h1>Pendu</h1>
      <HangmanDrawn errors={errors} />
      <p className="errors">Erreurs : {errors} / 6</p>
      <WordDisplay wordToGuess={wordToGuess} usedLetters={usedLetters} />
      <GameStatus won={won} lost={lost} wordToGuess={wordToGuess} />
      <Keyboard usedLetters={usedLetters} clickedLetter={clickedLetter} disabled={lost || won} />
      <HintButton wordToGuess={wordToGuess} usedLetters={usedLetters} clickedLetter={clickedLetter} disabled={won || lost} />
      <button className="btn-new-game" onClick={newPart}>Nouvelle Partie</button>
    </div>
  )
}