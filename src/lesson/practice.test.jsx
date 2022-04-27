/**
 * @fileoverview Figure out how to fix the linting errors reported in this file.
 */

import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { App } from '../App'
import userEvent from '@testing-library/user-event'

const fetchMock = jest.fn().mockResolvedValue({ ok: true })

beforeEach(() => {
  global.fetch = fetchMock
})

it('should trigger trace requests on count clicks', async () => {
  render(<App />)
  const button = screen.getByRole('button')

  userEvent.click(button)
  await waitFor(() => {
    expect(fetchMock).toHaveBeenLastCalledWith('/api/fake-trace-resource', {
      method: 'POST',
    })
    expect(fetchMock).toHaveBeenCalledTimes(1)
    expect(button).toHaveTextContent('Count is: 1')
  })

  userEvent.click(button)
  await waitFor(() => {
    expect(fetchMock).toHaveBeenLastCalledWith('/api/fake-trace-resource', {
      method: 'POST',
    })
    expect(fetchMock).toHaveBeenCalledTimes(2)
    expect(button).toHaveTextContent('Count is: 2')
  })

  userEvent.click(button)
  userEvent.click(button)
  userEvent.click(button)
  await waitFor(() => {
    expect(fetchMock).toHaveBeenLastCalledWith('/api/fake-trace-resource', {
      method: 'POST',
    })
    expect(fetchMock).toHaveBeenCalledTimes(5)
    expect(button).toHaveTextContent('Count is: 5')
  })
})
