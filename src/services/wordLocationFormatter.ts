import { HistoryItem } from '../App';

/**
 * Transform '6,1,6,2,6,3,6,4' into [{ line: 6, row: 1 }, {line: 6, row: 2}, ...]
 * @param pathHorizontal
 */
export default function wordLocationFormatter(pathHorizontal: string): Array<HistoryItem> {
  const winningPath = pathHorizontal.split(',')
  const finalPath: Array<HistoryItem> = []
  for (let i = 0; i < winningPath.length; i++) {
    if (i % 2 === 0) {
      finalPath.push({
        column: winningPath[i],
        row: winningPath[i + 1]
      })
    }
  }
  return finalPath
}
