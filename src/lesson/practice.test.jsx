/**
 * @fileoverview Figure out how to fix the linting errors reported in this file.
 */

import React from 'react'
import { render, waitFor } from '@testing-library/react'
import { App } from '../App'
import userEvent from '@testing-library/user-event'
import { bulbasaur } from './fixtures'

const fetchMock = jest
  .fn()
  .mockResolvedValue({ ok: true, json: jest.fn().mockResolvedValue(bulbasaur) })

beforeEach(() => {
  global.fetch = fetchMock
})

it('should handle the keyboard and make a request to pokeapi', async () => {
  render(<App shouldAwaitAdditionalPromise />)

  userEvent.tab()
  userEvent.keyboard('3')
  userEvent.keyboard('{enter}')

  await waitFor(() => {})
  expect(global.fetch).toHaveBeenCalledTimes(1)
  expect(global.fetch).toHaveBeenCalledWith(
    'https://pokeapi.co/api/v2/pokemon/3/',
  )
})
