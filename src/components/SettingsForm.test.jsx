/* @vitest-environment jsdom */
import '@testing-library/jest-dom/vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import SettingsForm from './SettingsForm.jsx'

afterEach(() => {
  cleanup()
})

describe('SettingsForm', () => {
  it('disables Save changes initially', () => {
    render(<SettingsForm />)

    expect(screen.getByRole('button', { name: 'Save changes' })).toBeDisabled()
  })

  it('shows required validation for a whitespace-only display name while typing', () => {
    render(<SettingsForm />)
    const displayName = screen.getByLabelText('Display name')

    fireEvent.change(displayName, { target: { value: '   ' } })

    expect(screen.getByText('Display name is required.')).toBeVisible()
    expect(displayName).toHaveAttribute('aria-invalid', 'true')
  })

  it('shows invalid email validation while typing', () => {
    render(<SettingsForm />)

    fireEvent.change(screen.getByLabelText('Email address'), {
      target: { value: 'not-an-email' },
    })

    expect(screen.getByText('Enter a valid email address.')).toBeVisible()
  })

  it('enables Save changes after a valid change', () => {
    render(<SettingsForm />)
    const saveButton = screen.getByRole('button', { name: 'Save changes' })

    fireEvent.change(screen.getByLabelText('Bio'), {
      target: { value: 'A new bio.' },
    })

    expect(saveButton).toBeEnabled()
  })

  it('keeps Save changes disabled when a changed email is invalid', () => {
    render(<SettingsForm />)
    const saveButton = screen.getByRole('button', { name: 'Save changes' })

    fireEvent.change(screen.getByLabelText('Email address'), {
      target: { value: 'invalid' },
    })

    expect(screen.getByText('Enter a valid email address.')).toBeVisible()
    expect(saveButton).toBeDisabled()
  })

  it('cancels edits and clears validation', () => {
    render(<SettingsForm />)
    const displayName = screen.getByLabelText('Display name')

    fireEvent.change(displayName, { target: { value: '' } })
    expect(screen.getByText('Display name is required.')).toBeVisible()

    fireEvent.click(screen.getByRole('button', { name: 'Cancel' }))

    expect(displayName).toHaveValue('Amina Khan')
    expect(screen.queryByText('Display name is required.')).not.toBeInTheDocument()
  })

  it('shows success after saving and uses saved values as the new original values', () => {
    render(<SettingsForm />)
    const bio = screen.getByLabelText('Bio')
    const saveButton = screen.getByRole('button', { name: 'Save changes' })

    fireEvent.change(bio, { target: { value: 'Saved bio.' } })
    fireEvent.click(saveButton)

    expect(screen.getByRole('status')).toHaveTextContent('Settings saved successfully.')
    expect(saveButton).toBeDisabled()

    fireEvent.change(bio, { target: { value: 'Temporary edit.' } })
    fireEvent.click(screen.getByRole('button', { name: 'Cancel' }))

    expect(bio).toHaveValue('Saved bio.')
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })
})
