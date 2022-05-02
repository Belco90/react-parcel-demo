import React from 'react'
import { render, screen } from '@testing-library/react'
import { App } from '../App'

it('should render a basic demo', () => {
  render(<App />)

  expect(screen.getByAltText('React logo')).toBeInTheDocument()
  expect(screen.getByText('Hello Parcel + React!')).toBeDefined()
  expect(screen.getByRole('button', { name: 'Count is: 0' })).toBeTruthy()
  expect(screen.getByText('Hello Parcel + React!')).not.toBeNull()
  expect(screen.getByText('Parcel Docs')).not.toBeFalsy()
})
