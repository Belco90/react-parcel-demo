import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from '../App'

const fetchMock = jest.fn().mockResolvedValue({ ok: true })

beforeEach(() => {
  global.fetch = fetchMock
})

it('should track one count', () => {
  render(<App />)

  const countButton = screen.getByRole('button', { name: 'Count is: 0' })
  userEvent.click(countButton)

  waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1))
})
