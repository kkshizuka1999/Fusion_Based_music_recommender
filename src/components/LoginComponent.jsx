import React from 'react'
import '../button.scss'

const LoginComponent = () => {
  function makeState(length) {
    let result = ''
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    for (let i = 0; i < length; i += 1) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
  }
  const login = () => {
    const CLIENT_ID = '31ba0a4e4e904836bff6ac72f5de9f4b'
    const REDIRECT_URI = 'https://fusion-based-music-recommender.web.app/'
    const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
    const RESPONSE_TYPE = 'token'
    const SHOW_DIALOG = 'true'
    const STATE = makeState(16)
    const SCOPES = [
      'streaming',
      'user-read-email',
      'user-read-private',
      'user-library-read',
      'user-library-modify',
      'user-read-playback-state',
      'user-modify-playback-state',
    ]
    window.location = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&state=${STATE}&response_type=${RESPONSE_TYPE}&scope=${SCOPES.join(
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

export default LoginComponent
