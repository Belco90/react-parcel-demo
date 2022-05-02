/**
 * @fileoverview Figure out how to fix the linting errors reported in this file.
 */

import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from '../App'

it('should render a basic demo', async () => {
  render(<App />)

  await waitFor(() => screen.getByText(/save to test HMR updates/))
  await waitFor(() =>
    expect(screen.getByRole('link', { name: 'Learn React' })).not.toBeNull(),
  )
  const button = await waitFor(() => screen.getByText('Count is: 0'), {
    timeout: 100,
  })
  userEvent.click(button)
  expect(button).toHaveTextContent('Count is: 1')
})
