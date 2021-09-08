import { DragMoveEvent, useDndMonitor } from '@dnd-kit/core';
import lodash from 'lodash';
import React, { CSSProperties, useEffect, useState } from 'react';
import wordLocationFormatter from '../services/wordLocationFormatter';
import SuccessOverlay from './SuccessOverlay';
import { HistoryItem } from '../App';
import Row from './Row';

export interface Props {
  characters: Array<Array<string>>
  wordLocations: { [key: string]: string },

  onRestart(): void
}

const styles = {
  display: 'flex',
  flexWrap: 'wrap',
} as CSSProperties

export default function Grid({ wordLocations, onRestart, characters }: Props) {
  const [history, setHistory] = useState<Array<HistoryItem>>([])
  const [translationsFound, setTranslationsFound] = useState<Array<HistoryItem>>([])
  const [translationsFoundCount, setTranslationsFoundCount] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const availableTranslationsOnGrid = Object.keys(wordLocations)

  useEffect(() => {
    if (translationsFoundCount === availableTranslationsOnGrid.length) {
      setGameOver(true)
    }
  }, [translationsFoundCount, availableTranslationsOnGrid])

  function resetGame() {
    onRestart()
    setHistory([])
    setTranslationsFound([])
    setTranslationsFoundCount(0)
    setGameOver(false)
  }

  useDndMonitor({
    onDragOver(event: DragMoveEvent) {
      const position = event.over?.id.split('-')
      if (position) {
        const item = {
          row: position && position[1],
          line: position && position[2]
        }
        setHistory([...history, item])
      }
    },
    onDragEnd() {
      const existingTranslationPath = availableTranslationsOnGrid.some((stringLocation) => {
        // We keep on populating the history with the already found translations
        // in order to have the lodash.isEqual working, we need to remove them every time we
        // want to compare the newest history entries
        return lodash.isEqual(
          wordLocationFormatter(stringLocation),
          history.filter(h => !translationsFound.some(a => a === h))
        )
      })
      if (existingTranslationPath) {
        const answers = [...translationsFound, ...history]
        setTranslationsFound(answers)
        setTranslationsFoundCount(i => i + 1)
      } else {
        setHistory([...translationsFound])
      }
    }
  })

  return (
    <div>
      {gameOver && <SuccessOverlay onClick={resetGame}/>}
      <div style={styles}>
        {characters.map((row, index) => (
          <Row pathTaken={history} key={index} rowNumber={index} characters={row}/>
        ))}
      </div>
    </div>
  )
}
