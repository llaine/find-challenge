import isLetterInHistory from '../isLetterInHistory';


describe('letterInHistory', () => {
  it('return true when it works', () => {
    expect(isLetterInHistory(
      { row: '1', column: '1' },
      [{ row: '1', column: '1' }, { row: '2', column: '2' }])
    ).toBeTruthy()
  })
  it('return false when its not part of the history', () => {
    expect(isLetterInHistory({ row: '1', column: '1' }, [])).toBeFalsy()
    expect(isLetterInHistory(
      { row: '1', column: '1' },
      [{ row: '1', column: '3' }, { row: '2', column: '2' }])
    ).toBeFalsy()
  })
})
