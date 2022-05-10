import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '@/App'

describe('App test', () => {
  test('Should render App', () => {
    render(<App />)

    expect(screen.getByText('Hello World')).not.toBeNull()
  })
})
