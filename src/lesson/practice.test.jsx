/**
 * @fileoverview Figure out how to fix the linting errors reported in this file.
 */

import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from '../App'

const fetchMock = jest.fn().mockResolvedValue({ ok: true })

beforeEach(() => {
  global.fetch = fetchMock
})

it('should track several count triggered in different ways', async () => {
  render(<App />)

  const countButton = screen.getByRole('button', { name: 'Count is: 0' })
  expect(countButton).not.toHaveFocus()

  userEvent.tab()
  expect(countButton).toHaveFocus()
  userEvent.keyboard('{Enter}')

  expect(countButton).toHaveTextContent('Count is: 1')
  await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1))

  userEvent.click(countButton)
  userEvent.click(countButton)
  userEvent.click(countButton)

  expect(countButton).toHaveTextContent('Count is: 4')
  waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(7))
})
