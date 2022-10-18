import React from 'react'
import '../button.scss'

const Login = () => {
  const login = () => {
    const CLIENT_ID = '31ba0a4e4e904836bff6ac72f5de9f4b'
    const REDIRECT_URI = 'http://localhost:3000'
    const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
    const RESPONSE_TYPE = 'token'
    const SHOW_DIALOG = 'true'
    const scopes = [
      'streaming',
      'user-read-email',
      'user-read-private',
      'user-library-read',
      'user-library-modify',
      'user-read-playback-state',
      'user-modify-playback-state',
    ]
    window.location = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${scopes.join(
      ' '
    )}&show_dialog=${SHOW_DIALOG}`
  }

  return (
    <button
      type="button"
      onClick={login}
      className="ui-button fancy-button pop-onhover bg-gradient2"
    >
      <span className="auth-btn">Login with Spotify</span>
    </button>
  )
}

export default Login
