import { useDraggable, useDroppable } from '@dnd-kit/core';
import { CSSProperties } from 'react';
import { HistoryItem } from '../App';

export interface Props {
  letter: string
  gridPosition: [number, number]
  pathTaken: Array<HistoryItem>
  overed: boolean
}

const styles = {
  padding: 15,
  height: 20,
  width: 20,
  textAlign: 'center',
} as CSSProperties

export default function Letter(props: Props) {
  const [positionX, positionY] = props.gridPosition
  const { setNodeRef, listeners, attributes } = useDraggable({
    id: `draggable-${positionX}-${positionY}`,
    disabled: props.overed
  });
  const { setNodeRef: setNodeRefDroppable } = useDroppable({
    id: `droppable-${positionX}-${positionY}`
  });

  return (
    <div style={{ background: props.overed ? 'orange' : 'white' }} data-testid={'letterContainer'}
         ref={setNodeRefDroppable}>
      <div style={styles} ref={setNodeRef}
           {...listeners}
           {...attributes}>
      <span>
        {props.letter}
      </span>
      </div>
    </div>
  )
}
