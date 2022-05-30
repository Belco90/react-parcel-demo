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

it('should render the basic Pokémon info', async () => {
  render(<App />)

  const idInput = screen.getByLabelText('Pick one Pokémon by their ID')
  userEvent.type(idInput, '1')

  await waitFor(() => {
    userEvent.click(screen.getByRole('button', { name: 'Search' }))
    expect(screen.getAllByRole('listitem')).toHaveLength(2)
  })
})
