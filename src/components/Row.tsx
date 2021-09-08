import React, { CSSProperties } from 'react';
import isLetterInHistory from '../services/isLetterInHistory';
import { HistoryItem } from '../App';
import Letter from './Letter';

export interface Props {
  rowNumber: number
  characters: Array<string>
  history: Array<HistoryItem>
}

const styles = {
  flexDirection: 'row',
} as CSSProperties

export default function Row(props: Props) {
  return (
    <div style={styles} data-testid={'rowContainer'}>
      {props.characters.map((character, i) => {
        const overed = isLetterInHistory({
          row: props.rowNumber.toString(),
          column: i.toString()
        }, props.history)
        return <Letter
          key={i}
          overed={overed}
          positionOnGrid={[props.rowNumber, i]}
          history={props.history}
          letter={character}/>
      })}
    </div>
  )


}
