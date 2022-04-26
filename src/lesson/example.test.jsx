import React from 'react'
import { render, screen } from '@testing-library/react'
import { App } from '../App'

it('should render a basic demo', () => {
  render(<App />)
  const banner = screen.getByRole('banner')
  const heading = screen.getByRole('heading', { name: 'Hello Parcel + React!' })
  expect(banner.firstChild).toHaveAttribute('alt', 'React logo')
  expect(heading.closest('header')).toHaveClass('App-header')
})
