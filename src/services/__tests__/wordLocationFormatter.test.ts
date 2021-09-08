import wordLocationFormatter from '../wordLocationFormatter';


describe('wordLocationFormatter', () => {
  it('format location format to an array of oject', () => {
    const result = [{ column: '1', row: '1' }, { column: '1', row: '2' }, { column: '1', row: '3' }]
    const params = '1,1,1,2,1,3'
    expect(wordLocationFormatter(params)).toEqual(result)
  })
})
