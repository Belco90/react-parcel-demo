/**
 * @fileoverview Figure out how to fix the linting errors reported in this file.
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import { App } from '../App'
import userEvent from '@testing-library/user-event'
import { bulbasaur } from './fixtures'

const fetchMock = jest
  .fn()
  .mockResolvedValue({ ok: true, json: jest.fn().mockResolvedValue(bulbasaur) })

function findPokemonByName(pokemonName) {
  return screen.findByText(pokemonName)
}

beforeEach(() => {
  global.fetch = fetchMock
})

it('should render the Pokémon name', () => {
  render(<App />)

  userEvent.type(screen.getByLabelText('Pick one Pokémon by their ID'), '1')
  userEvent.click(screen.getByRole('button', { name: 'Search' }))

  expect(findPokemonByName('charmander')).toBeTruthy()
})
