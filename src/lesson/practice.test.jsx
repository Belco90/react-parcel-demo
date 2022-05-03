/**
 * @fileoverview Figure out how to fix the linting errors reported in this file.
 */

import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { App } from '../App'

it('should render a basic demo', () => {
  render(<App />)

  const button = screen.getByRole('button', { name: 'Count is: 0' })
  fireEvent.click(button)
  fireEvent.click(button)
  expect(button).toHaveTextContent('Count is: 2')

  const resetInput = screen.getByLabelText(
    /write "reset" and hit enter to reset all the counts/i,
  )

  fireEvent.keyDown(resetInput, {
    code: 'Enter',
    target: { value: 'not the expected word' },
  })
  expect(button).toHaveTextContent('Count is: 2')
  fireEvent.cut(resetInput)

  fireEvent.keyDown(resetInput, {
    code: 'Enter',
    target: { value: 'reset' },
  })
  expect(button).toHaveTextContent('Count is: 0')
})
