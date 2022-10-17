import React, { useEffect, useState } from 'react'

import SpotifyWebPlayer from 'react-spotify-web-playback/lib'

export default function Player({ trackUri }) {
  const [play, setPlay] = useState(false)
  const token = window.localStorage.getItem('token')
  useEffect(() => setPlay(true), [trackUri])
  if (!token) return null
  return (
    <SpotifyWebPlayer
      token={token}
      initialVolume={0.1}
      showSaveIcon
      callback={(state) => {
        if (state.isPlaying) {
          setPlay(false)
        }
      }}
      play={play}
      uris={trackUri ? [trackUri] : []}
    />
  )
}
