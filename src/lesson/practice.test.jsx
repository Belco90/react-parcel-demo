/**
 * @fileoverview Figure out how to fix the linting errors reported in this file.
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from '../App'

it('should render a basic demo', () => {
  render(<App />)

  expect(screen.getByText('Count is: 1')).not.toBeInTheDocument()

  userEvent.click(screen.getByRole('button'))

  expect(screen.queryByText('Count: 1')).not.toBeNull()
})
