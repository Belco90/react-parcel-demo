/**
 * @fileoverview Figure out how to fix the linting errors reported in this file.
 */

import React from 'react'
import { render, getByRole } from '@testing-library/react'
import { App } from '../App'

it('should render a basic demo', () => {
  const { getByText, getByRole, queryByText, getAllByRole } = render(<App />)

  expect(getByRole('img', { name: 'React logo' })).toBeInTheDocument()
  expect(getByText(/and save to test HMR updates./i)).toBeInTheDocument()
  expect(queryByText('I do not exist')).not.toBeInTheDocument()
  expect(getAllByRole('link')).toHaveLength(2)
})

it('should render a count button', () => {
  const { container } = render(<App />)

  expect(
    getByRole(container, 'button', { name: 'Count is: 0' }),
  ).toBeInTheDocument()
})
