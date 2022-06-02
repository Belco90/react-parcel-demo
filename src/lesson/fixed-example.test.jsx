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
  .mockResolvedValue({ ok: true, json: jest.fn().mockResolvedValue(bulbasaur) })

beforeEach(() => {
  global.fetch = fetchMock
})

it('should make the placeholder disappear when a Pokémon is selected', async () => {
  render(<App />)

  expect(screen.getByText('No Pokémon selected')).toBeInTheDocument()

  userEvent.type(screen.getByLabelText(/Pick one Pokémon/), '1')
  userEvent.click(screen.getByRole('button', { name: /search/i }))

  await waitForElementToBeRemoved(() =>
    screen.queryByText('No Pokémon selected'),
  )
})
