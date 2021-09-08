import { HistoryItem } from '../App';

export default function isLetterInHistory(currentPosition: HistoryItem, positions: Array<HistoryItem>): boolean {
  return Boolean(positions.find(position => position.column === currentPosition.column && position.row === currentPosition.row))
}
