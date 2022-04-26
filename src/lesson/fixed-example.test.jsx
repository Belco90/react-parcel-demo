import React from 'react'
import { render, screen, within } from '@testing-library/react'
import { App } from '../App'

it('should render a basic demo', () => {
  render(<App />)
  const banner = screen.getByRole('banner')
  const heading = screen.getByRole('heading', { name: 'Hello Parcel + React!' })
  expect(within(banner).getByRole('img')).toHaveAttribute('alt', 'React logo')
  expect(heading).toHaveClass('App-header')
})
