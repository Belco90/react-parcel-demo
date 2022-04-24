/**
 * @fileoverview Figure out how to fix the linting errors reported in this file.
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import { App } from '../App'

it('should render a basic demo', async () => {
  render(<App />)

  expect(
    await screen.findByRole('img', { name: 'React logo' }),
  ).toBeInTheDocument()

  expect(
    await screen.getByText(/and save to test HMR updates./i),
  ).toBeInTheDocument()

  expect(screen.queryByText('I do not exist')).not.toBeInTheDocument()
})
