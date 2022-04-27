/**
 * @fileoverview Figure out how to fix the linting errors reported in this file.
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import { App } from '../App'
import userEvent from '@testing-library/user-event'

let button = undefined

beforeEach(() => {
  render(<App />)
  button = screen.getByRole('button')
})

it('should start the count in 0', () => {
  expect(screen.getByText('Count is: 0')).toBeInTheDocument()
})

it('should increase the count', () => {
  userEvent.click(button)
  expect(screen.getByText('Count is: 1')).toBeInTheDocument()
})
