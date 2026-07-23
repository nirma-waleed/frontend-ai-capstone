import { useState } from 'react'
import './SettingsForm.css'

const INITIAL_SETTINGS = {
  displayName: 'Amina Khan',
  email: 'amina.khan@example.com',
  bio: 'Building thoughtful products and useful tools.',
  theme: 'system',
  language: 'en',
  timezone: 'UTC',
  emailNotifications: true,
  pushNotifications: false,
  marketingEmails: false,
}

function SettingsForm() {
  const [settings, setSettings] = useState(INITIAL_SETTINGS)
  const [savedSettings, setSavedSettings] = useState(INITIAL_SETTINGS)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)

  const hasChanges = JSON.stringify(settings) !== JSON.stringify(savedSettings)
  const hasValidationErrors = Object.values(errors).some(Boolean)
  const canSave = hasChanges && !hasValidationErrors

  function getFieldError(name, value) {
    if (name === 'displayName' && !value.trim()) {
      return 'Display name is required.'
    }

    if (name === 'email') {
      if (!value.trim()) return 'Email is required.'
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
        return 'Enter a valid email address.'
      }
    }

    return undefined
  }

  function handleChange(event) {
    const { name, value, type, checked } = event.target
    const nextValue = type === 'checkbox' ? checked : value
    setSettings((prev) => ({
      ...prev,
      [name]: nextValue,
    }))
    if (name === 'displayName' || name === 'email') {
      setErrors((prev) => ({ ...prev, [name]: getFieldError(name, value) }))
    }
    setStatus(null)
  }

  function validate() {
    const nextErrors = {}

    const displayNameError = getFieldError('displayName', settings.displayName)
    const emailError = getFieldError('email', settings.email)
    if (displayNameError) nextErrors.displayName = displayNameError
    if (emailError) nextErrors.email = emailError

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (!validate()) return

    setSavedSettings(settings)
    setStatus('saved')
  }

  function handleReset() {
    setSettings(savedSettings)
    setErrors({})
    setStatus(null)
  }

  return (
    <main className="settings-page">
      <form className="settings-form" onSubmit={handleSubmit} noValidate>
      <header className="settings-form__header">
        <h1>Settings</h1>
        <p>Manage your profile, preferences, and notification options.</p>
      </header>

      <fieldset className="settings-form__section">
        <legend>Profile</legend>

        <div className="settings-form__field settings-form__field--full">
          <label htmlFor="displayName">Display name</label>
          <input
            id="displayName"
            name="displayName"
            type="text"
            value={settings.displayName}
            onChange={handleChange}
            placeholder="Jane Doe"
            aria-invalid={Boolean(errors.displayName)}
            aria-describedby={errors.displayName ? 'displayName-error' : undefined}
          />
          {errors.displayName && (
            <span id="displayName-error" className="settings-form__error" role="alert">
              {errors.displayName}
            </span>
          )}
        </div>

        <div className="settings-form__field settings-form__field--full">
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            value={settings.email}
            onChange={handleChange}
            placeholder="jane@example.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <span id="email-error" className="settings-form__error" role="alert">
              {errors.email}
            </span>
          )}
        </div>

        <div className="settings-form__field">
          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            name="bio"
            value={settings.bio}
            onChange={handleChange}
            placeholder="Tell us a little about yourself"
            rows={3}
          />
        </div>
      </fieldset>

      <fieldset className="settings-form__section">
        <legend>Preferences</legend>

        <div className="settings-form__field">
          <label htmlFor="theme">Theme</label>
          <select id="theme" name="theme" value={settings.theme} onChange={handleChange}>
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        <div className="settings-form__field">
          <label htmlFor="language">Language</label>
          <select
            id="language"
            name="language"
            value={settings.language}
            onChange={handleChange}
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="ur">Urdu</option>
          </select>
        </div>

        <div className="settings-form__field">
          <label htmlFor="timezone">Timezone</label>
          <select
            id="timezone"
            name="timezone"
            value={settings.timezone}
            onChange={handleChange}
          >
            <option value="UTC">UTC</option>
            <option value="America/New_York">Eastern (US)</option>
            <option value="America/Chicago">Central (US)</option>
            <option value="America/Los_Angeles">Pacific (US)</option>
            <option value="Europe/London">London</option>
            <option value="Asia/Tokyo">Tokyo</option>
          </select>
        </div>
      </fieldset>

      <fieldset className="settings-form__section">
        <legend>Notifications</legend>

        <label className="settings-form__toggle">
          <input
            type="checkbox"
            name="emailNotifications"
            checked={settings.emailNotifications}
            onChange={handleChange}
          />
          <span className="settings-form__toggle-label">
            <strong>Email notifications</strong>
            <small>Receive updates about your account activity.</small>
          </span>
        </label>

        <label className="settings-form__toggle">
          <input
            type="checkbox"
            name="pushNotifications"
            checked={settings.pushNotifications}
            onChange={handleChange}
          />
          <span className="settings-form__toggle-label">
            <strong>Push notifications</strong>
            <small>Get alerts on this device in real time.</small>
          </span>
        </label>

        <label className="settings-form__toggle">
          <input
            type="checkbox"
            name="marketingEmails"
            checked={settings.marketingEmails}
            onChange={handleChange}
          />
          <span className="settings-form__toggle-label">
            <strong>Marketing emails</strong>
            <small>Product news, tips, and occasional offers.</small>
          </span>
        </label>
      </fieldset>

      <div className="settings-form__actions">
        {status === 'saved' && (
          <p className="settings-form__status" role="status">
            Settings saved successfully.
          </p>
        )}
        <button type="button" className="settings-form__btn settings-form__btn--secondary" onClick={handleReset} disabled={!hasChanges}>
          Cancel
        </button>
        <button type="submit" className="settings-form__btn settings-form__btn--primary" disabled={!canSave}>
          Save changes
        </button>
      </div>
      </form>
    </main>
  )
}

export default SettingsForm
