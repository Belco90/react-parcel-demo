/**
 * @fileoverview Figure out how to fix the linting errors reported in this file.
 */

import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import { App } from '../App'

afterEach(cleanup)

it('should render count', () => {
  render(<App />)
  expect(screen.getByText('Count is: 0')).toBeInTheDocument()
})
