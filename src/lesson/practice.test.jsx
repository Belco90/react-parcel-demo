/**
 * @fileoverview Figure out how to fix the linting errors reported in this file.
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import { App } from '../App'

it('should render links to docs', () => {
  render(<App />)
  expect(screen.getAllByText(/(learn react|parcel docs)/gi)).toHaveLength(2)
})
