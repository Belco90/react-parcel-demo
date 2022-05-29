import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { App } from '../App'
import userEvent from '@testing-library/user-event'
import { bulbasaur } from './fixtures'

const fetchMock = jest
  .fn()
  .mockResolvedValue({ ok: true, json: jest.fn().mockResolvedValue(bulbasaur) })

beforeEach(() => {
  global.fetch = fetchMock
})

it('should make a request to pokeapi', async () => {
  render(<App />)

  const idInput = screen.getByLabelText('Pick one Pokémon by their ID')
  userEvent.type(idInput, '1')
  userEvent.click(screen.getByRole('button', { name: 'Search' }))

  await waitFor(() => {})
  expect(global.fetch).toHaveBeenCalledTimes(1)
  expect(global.fetch).toHaveBeenCalledWith(
    'https://pokeapi.co/api/v2/pokemon/1/',
  )
})
