import React, { CSSProperties } from 'react';
import { HistoryItem } from '../App';
import Letter from './Letter';

interface Props {
  rowNumber: number
  characters: Array<string>
  pathTaken: Array<HistoryItem>
}

const styles = {
  flexDirection: 'row',
} as CSSProperties

const isLetterInPath = (currentPosition: HistoryItem, positions: Array<HistoryItem>) => {
  return Boolean(positions.find(position => position.line === currentPosition.line && position.row === currentPosition.row))
}

export default function Row(props: Props) {
  return (
    <div style={styles}>
      {props.characters.map((character, i) => {
        const overed = isLetterInPath({ row: props.rowNumber.toString(), line: i.toString() }, props.pathTaken)
        return <Letter
          key={i}
          overed={overed}
          gridPosition={[props.rowNumber, i]}
          pathTaken={props.pathTaken}
          letter={character}/>
      })}
    </div>
  )


}
