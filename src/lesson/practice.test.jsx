/**
 * @fileoverview Figure out how to fix the linting errors reported in this file.
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import { App } from '../App'

it('should be properly unmounted', () => {
  const wrapper = render(<App />)
  const { container, unmount } = wrapper
  const mainHeading = screen.getByText('Hello Parcel + React!')
  expect(mainHeading).toBeInTheDocument()

  unmount()

  expect(mainHeading).not.toBeInTheDocument()
  expect(container.innerHTML).toBe('')
})

it('should be properly rerendered', () => {
  const wrapper = render(<App />)

  const mainHeading = wrapper.getByText('Hello Parcel + React!')
  expect(mainHeading).toBeInTheDocument()

  wrapper.rerender(<App />)

  expect(mainHeading).toBeInTheDocument()
})
