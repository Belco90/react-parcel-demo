/**
 * @fileoverview Figure out how to fix the linting errors reported in this file.
 */

import React from 'react'
import { act, render, screen } from '@testing-library/react'
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

  it('should handle two counters', () => {
    render(<CountDemo />)

    const countButton = screen.getByRole('button')
    const secondsOpen = screen.getByText('Page has been open for 0 seconds.')

    expect(countButton).toHaveTextContent('Count is: 0')
    expect(secondsOpen).toHaveTextContent('0 seconds')

    act(() => {
      userEvent.click(countButton)
      userEvent.click(countButton)
    })

    expect(countButton).toHaveTextContent('Count is: 2')

    jest.advanceTimersByTime(1000)
    expect(secondsOpen).toHaveTextContent('1 seconds')

    act(() => {
      userEvent.click(countButton)
      jest.advanceTimersByTime(1500)
    })

    expect(countButton).toHaveTextContent('Count is: 3')
    expect(secondsOpen).toHaveTextContent('2 seconds')
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
    await act(async () => userEvent.click(screen.getByRole('button')))

    expect(screen.getByText('bulbasaur')).toBeInTheDocument()
    expect(screen.getByText('grass, poison')).toBeInTheDocument()
  })

  it('should display the basic Pokémon info when waiting for additional promise', async () => {
    render(<PokemonDemo shouldAwaitAdditionalPromise />)

    userEvent.type(screen.getByLabelText('Pick one Pokémon by their ID'), '1')
    await act(async () => userEvent.click(screen.getByRole('button')))

    expect(screen.getByText('bulbasaur')).toBeInTheDocument()
    expect(screen.getByText('grass, poison')).toBeInTheDocument()
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

    await act(async () => {})

    expect(screen.getByText('Temperature: 28.1ºC')).toBeInTheDocument()
    expect(screen.getByText('Forecast: Clear sky')).toBeInTheDocument()
  })
  it('should display Madrid weather when waiting for additional promise', async () => {
    render(<WeatherDemo shouldAwaitAdditionalPromise />)

    await act(async () => {})

    expect(screen.getByText('Temperature: 28.1ºC')).toBeInTheDocument()
    expect(screen.getByText('Forecast: Clear sky')).toBeInTheDocument()
  })
})
