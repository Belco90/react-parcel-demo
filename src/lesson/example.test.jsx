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
    expect(fetchMock).toHaveBeenCalledWith('/api/fake-trace-resource', {
      method: 'POST',
    })
    expect(fetchMock).toHaveBeenCalledTimes(1)
  })
})
