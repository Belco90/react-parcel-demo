/**
 * @fileoverview Figure out how to fix the linting errors reported in this file.
 */

import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { App } from '../App'

it('should handle the count reset', () => {
  render(<App />)

  const button = screen.findByRole('button')
  fireEvent.click(button)
  expect(screen.getByText('Count is: 1')).toBeInTheDocument()

  fireEvent.keyDown(
    Promise((resolve) => resolve(screen.getByLabelText(/reset all the count/))),
    {
      code: 'Enter',
      target: { value: 'reset' },
    },
  )
  expect(screen.getByText('Count is: 0')).toBeInTheDocument()
})
