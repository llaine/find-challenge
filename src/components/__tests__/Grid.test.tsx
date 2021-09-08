import { render } from '@testing-library/react';
import React from 'react';
import Grid, { Props } from '../Grid';

const defaultProps: Props = {
  characters: [['a', 'b', 'c'], ['d', 'e', 'f'], ['i', 'j', 'k', 'l']],
  wordLocations: {},
  onRestart: jest.fn()
}

const setup = (setupProps?: Partial<Props>) => {
  const props = { ...defaultProps, ...setupProps };
  return render(<Grid {...props} />)
}

describe('Grid', () => {
  it('render multiple row and letters based on the characters passed', () => {
    const wrapper = setup()
    expect(wrapper.getAllByTestId('rowContainer').length).toBe(3)
    expect(wrapper.getAllByTestId('letterContainer').length).toBe(10)
  })
})
