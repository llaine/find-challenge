import React, { CSSProperties } from 'react';
import isLetterInArrayOfHistory from '../services/letterInArrayOfHistory';
import { HistoryItem } from '../App';
import Letter from './Letter';

export interface Props {
  rowNumber: number
  characters: Array<string>
  pathTaken: Array<HistoryItem>
}

const styles = {
  flexDirection: 'row',
} as CSSProperties

export default function Row(props: Props) {
  return (
    <div style={styles} data-testid={'rowContainer'}>
      {props.characters.map((character, i) => {
        const overed = isLetterInArrayOfHistory({
          row: props.rowNumber.toString(),
          line: i.toString()
        }, props.pathTaken)
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
