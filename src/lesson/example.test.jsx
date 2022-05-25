import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { App } from '../App'

it('should count click', () => {
  render(<App />)
  expect(screen.getByText('Count is: 0')).toBeInTheDocument()
  fireEvent.click(screen.findByRole('button'))
  expect(screen.getByText('Count is: 1')).toBeInTheDocument()
})
