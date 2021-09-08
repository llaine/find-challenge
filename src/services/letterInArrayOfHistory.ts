import { HistoryItem } from '../App';

export default function isLetterInArrayOfHistory(currentPosition: HistoryItem, positions: Array<HistoryItem>): boolean {
  return Boolean(positions.find(position => position.line === currentPosition.line && position.row === currentPosition.row))
}
