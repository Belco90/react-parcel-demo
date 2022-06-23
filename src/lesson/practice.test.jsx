/**
 * @fileoverview Figure out how to fix the linting errors reported in this file.
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import { App } from '../App'

it('should render a basic demo', () => {
  const { debug } = render(<App />)
  debug()
  expect(screen.getByText('Hello Parcel + React!')).toBeInTheDocument()
  screen.logTestingPlaygroundURL()
})
