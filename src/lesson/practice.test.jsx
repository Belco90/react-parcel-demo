/**
 * @fileoverview Figure out how to fix the linting errors reported in this file.
 */

import React from 'react'
import { render } from '@testing-library/react'
import { App } from '../App'

it('should render a basic demo', () => {
  const { container } = render(<App />)
  expect(container.querySelector('img')).toBeInTheDocument()
  expect(container.querySelectorAll('.App-link')[1]).toHaveTextContent(
    'Parcel Docs',
  )
  expect(container.querySelector('.App-header')).toBeInTheDocument()
  expect(container.querySelector('button')).toBeInTheDocument()
})
