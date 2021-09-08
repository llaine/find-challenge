import { render } from '@testing-library/react';
import React from 'react';
import Letter, { Props } from '../Letter';


const defaultProps: Props = {
  letter: 'f',
  positionOnGrid: [0, 0],
  history: [],
  overed: false
}

const setup = (setupProps?: Partial<Props>) => {
  const props = { ...defaultProps, ...setupProps };
  return render(<Letter {...props} />)
}

describe('Letter', () => {
  it('render a letter as a string', async () => {
    const wrapper = setup()
    const textExisting = await wrapper.findAllByText(defaultProps.letter)
    expect(textExisting).toBeTruthy()
  })

  it('changes the background color based on the overed prop', () => {
    const wrapper = setup({ overed: true })
    expect(wrapper.getByTestId('letterContainer')).toHaveStyle('background: orange')
  })
})
