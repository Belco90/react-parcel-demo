/**
 * @fileoverview Figure out how to fix the linting errors reported in this file.
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from '../App'

it('should handle the click count', () => {
  render(<App />)

  const countButton = screen.getByTestId('CountButton')
  expect(countButton).toHaveTextContent('Count is: 0')

  userEvent.click(countButton)
  expect(countButton).toHaveTextContent('Count is: 1')

  const resetInput = screen.getByTestId('App-reset-input')
  userEvent.type(resetInput, 'reset')
  userEvent.type(resetInput, '{Enter}')

  expect(countButton).toHaveTextContent('Count is: 0')
})
