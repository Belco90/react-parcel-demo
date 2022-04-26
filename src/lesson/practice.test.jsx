/**
 * @fileoverview Figure out how to fix the linting errors reported in this file.
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import { App } from '../App'

it('should render a basic demo', () => {
  render(<App />)
  const banner = screen.getByRole('banner')
  expect(banner.lastChild.children).toHaveLength(2)
  expect(
    banner.querySelector('.App-link').nextElementSibling,
  ).toHaveTextContent('Parcel Docs')
})
