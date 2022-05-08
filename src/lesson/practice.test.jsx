/**
 * @fileoverview Figure out how to fix the linting errors reported in this file.
 */

import React from 'react'
import { render, screen, wait, waitForElement } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from '../App'

it('should render a basic demo', async () => {
  const { container } = render(<App />)

  expect(
    await waitForElement(() => container.querySelector('.App-logo')),
  ).toBeInTheDocument()
  const button = await waitForElement(() => screen.getByText('Count is: 0'))

  userEvent.click(button)
  userEvent.click(button)
  userEvent.click(button)
  userEvent.click(button)

  await wait(() => expect(button).toHaveTextContent('Count is: 4'))
})
