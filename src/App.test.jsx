import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from './App'

it('should render a basic demo', () => {
  render(<App />)
  expect(screen.getByText('Hello Parcel + React!')).toBeInTheDocument()
})

it('should render a click counter', () => {
  render(<App />)
  expect(screen.getByText('Count is: 0')).toBeInTheDocument()

  userEvent.click(screen.getByRole('button'))

  expect(screen.getByText('Count is: 1')).toBeInTheDocument()
  expect(screen.queryByText('Count is: 0')).not.toBeInTheDocument()
})
