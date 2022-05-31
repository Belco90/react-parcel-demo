/**
 * @fileoverview Figure out how to fix the linting errors reported in this file.
 */

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
  const { container } = render(<App shouldAwaitAdditionalPromise />)

  const idInput = screen.getByLabelText('Pick one Pokémon by their ID')
  userEvent.type(idInput, '1')
  userEvent.click(screen.getByRole('button', { name: 'Search' }))

  await waitFor(() => {
    expect(container.firstChild).toMatchSnapshot()
    expect(global.fetch).toHaveBeenCalledWith(
      'https://pokeapi.co/api/v2/pokemon/1/',
    )
  })
})
