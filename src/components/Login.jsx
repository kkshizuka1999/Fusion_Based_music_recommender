import React from 'react'
import { Button, Container } from 'react-bootstrap'

export default function Login() {
  const CLIENT_ID = "31ba0a4e4e904836bff6ac72f5de9f4b"
  const REDIRECT_URI = "http://localhost:3000"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"
  const scopes = [
    "streaming",
    "user-read-email",
    "user-read-private",
    "user-library-read",
    "user-library-modify",
    "user-read-playback-state",
    "user-modify-playback-state"
  ]
  const AUTH_URL = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${scopes.join(
    " "
  )}`

  return (
    <div>
      <Container>
        <Button href={AUTH_URL}>
          Login with Spotify
        </Button>
      </Container>
    </div>
  )
}
