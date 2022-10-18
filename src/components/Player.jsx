import React, { useContext, useEffect, useState } from 'react'
import SpotifyWebPlayer from 'react-spotify-web-playback/lib'
import { Context } from '../utils/Store'

const Player = ({ trackUri }) => {
  const [state] = useContext(Context)
  const [play, setPlay] = useState(false)
  const { token } = state
  useEffect(() => setPlay(true), [trackUri])
  if (!token) return null
  return (
    <SpotifyWebPlayer
      token={token}
      initialVolume={0.1}
      showSaveIcon
      callback={(callbackState) => {
        if (callbackState.isPlaying) {
          setPlay(false)
        }
      }}
      play={play}
      uris={trackUri ? [trackUri] : []}
    />
  )
}

export default Player
