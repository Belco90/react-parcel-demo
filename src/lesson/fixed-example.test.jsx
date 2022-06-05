import React from 'react'
import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CountDemo from '../demos/CountDemo'
import PokemonDemo from '../demos/PokemonDemo'
import WeatherDemo from '../demos/WeatherDemo'
import { bulbasaur, madridWeather } from './fixtures'

describe('Count demo', () => {
  beforeAll(() => {
    jest.useFakeTimers()
  })

  afterAll(() => {
    jest.useRealTimers()
  })

  it('should count the number of clicks', () => {
    render(<CountDemo />)

    const countButton = screen.getByRole('button')
    expect(countButton).toHaveTextContent('Count is: 0')

    userEvent.click(countButton)

    expect(countButton).toHaveTextContent('Count is: 1')
  })

  it('should count how long the page was open', () => {
    render(<CountDemo />)

    expect(
      screen.getByText('Page has been open for 0 seconds.'),
    ).toBeInTheDocument()

    act(() => jest.advanceTimersByTime(1000))

    expect(
      screen.getByText('Page has been open for 1 seconds.'),
    ).toBeInTheDocument()
  })
})

describe('Pokémon demo', () => {
  const fetchMock = jest.fn().mockResolvedValue({
    ok: true,
    json: jest.fn().mockResolvedValue(bulbasaur),
  })

  beforeEach(() => {
    global.fetch = fetchMock
  })

  it('should display the basic Pokémon info', async () => {
    render(<PokemonDemo />)

    userEvent.type(screen.getByLabelText('Pick one Pokémon by their ID'), '1')
    userEvent.click(screen.getByRole('button'))

    expect(await screen.findByText('bulbasaur')).toBeInTheDocument()
  })
})

describe('Weather demo', () => {
  const fetchMock = jest.fn().mockResolvedValue({
    ok: true,
    json: jest.fn().mockResolvedValue(madridWeather),
  })

  beforeEach(() => {
    global.fetch = fetchMock
  })

  it('should display Madrid weather', async () => {
    render(<WeatherDemo />)

    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1))
    expect(screen.getByText('Temperature: 28.1ºC')).toBeInTheDocument()
  })
})
