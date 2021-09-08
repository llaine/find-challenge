import { render } from '@testing-library/react';
import React from 'react';
import App from '../App';

describe('App', () => {
  it('renders a grid', () => {
    const wrapper = render(<App />)
    expect(wrapper.getAllByTestId('gridContainer').length).toBe(1)
  })
});
