import React from 'react'
import { render, screen } from '@testing-library/react'
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
  const { container } = render(<App />)

  const idInput = screen.getByLabelText('Pick one Pokémon by their ID')
  userEvent.type(idInput, '1')
  userEvent.click(screen.getByRole('button', { name: 'Search' }))

  await screen.findByText('bulbasaur')
  expect(container.firstChild).toMatchSnapshot()
})
