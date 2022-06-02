/**
 * @fileoverview Figure out how to fix the linting errors reported in this file.
 */

import React from 'react'
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from '../App'
import { bulbasaur } from './fixtures'

const fetchMock = jest
  .fn()
  .mockResolvedValueOnce({
    ok: true,
    json: jest.fn().mockResolvedValue(bulbasaur),
  })
  .mockResolvedValue({ ok: false })

beforeEach(() => {
  global.fetch = fetchMock
})

it('should remove the Pokémon info and show an error message when the request fails', async () => {
  render(<App />)
  const input = screen.getByLabelText(/Pick one Pokémon/)
  const submitButton = screen.getByRole('button', { name: /search/i })
  expect(screen.queryByText('Something went wrong')).not.toBeInTheDocument()

  userEvent.type(input, '1')
  userEvent.click(submitButton)

  await screen.findByText('bulbasaur')
  expect(screen.queryByText('Something went wrong')).not.toBeInTheDocument()

  userEvent.type(input, '-1')
  userEvent.click(submitButton)

  await waitForElementToBeRemoved(() => screen.getByText('bulbasaur'))
  expect(screen.getByText('Something went wrong')).toBeInTheDocument()
})
