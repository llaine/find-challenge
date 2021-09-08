import { render } from '@testing-library/react';
import React from 'react';
import Row, {Props} from '../Row'

const defaultProps: Props = {
  rowNumber: 1,
  characters: ['a', 'b', 'c'],
  history: []
}

const setup = (setupProps?: Partial<Props>) => {
  const props = { ...defaultProps, ...setupProps };
  return render(<Row {...props} />)
}


describe('Row', function () {
  it('render multiple letters based on the characters props', () => {
    const wrapper = setup()
    expect(wrapper.getAllByTestId('letterContainer').length).toBe(3)
  })
});
