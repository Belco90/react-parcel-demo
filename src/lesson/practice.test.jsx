/**
 * @fileoverview Figure out how to fix the linting errors reported in this file.
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import { App } from '../App'

it('should render a basic demo', async () => {
  render(<App />)

  await screen.findByAltText('React logo')
  screen.getByText(/Page has been open for/)
  expect(screen.queryByText('I do not exist')).not.toBeInTheDocument()
  screen.getAllByRole('link')
})
