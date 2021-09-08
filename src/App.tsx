import React, { CSSProperties, useEffect, useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import './App.css';
import Grid from './components/Grid';
import findChallenge from './find_challenge.json'

interface Word {
  source_language: string
  word: string
  character_grid: Array<Array<string>>
  word_locations: { [key: string]: string },
  target_language: string
}

export type HistoryItem = { row: string, line: string }

const styles = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
} as CSSProperties

function App() {
  const [currentWord, setCurrentWord] = useState<Word | undefined>()
  const words = findChallenge.words as unknown as Array<Word>
  function movesToNextWord() {
    const index = words.findIndex(word => currentWord?.word === word.word)
    if (index === words.length - 1) setCurrentWord(words[0])
    else setCurrentWord(words[index + 1])
  }

  useEffect(() => {
    setCurrentWord(words[0])
  }, [])

  return (
    <div style={styles}>
      <h2>Find the translation - 🇪🇸 edition </h2>
      <div>
        {currentWord &&
        <h4>{currentWord?.word} </h4>}
      </div>
      <div>
        <DndContext>
          {currentWord &&
          <Grid characters={currentWord.character_grid}
                onRestart={movesToNextWord}
                wordLocations={currentWord.word_locations}/>
          }
        </DndContext>
      </div>
    </div>
  );
}

export default App;
