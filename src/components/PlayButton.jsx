import React, { useContext } from 'react'

import { BsPlayFill } from 'react-icons/bs'
import { Context } from '../utils/Store'

export default function PlayButton(props) {
  const [state, dispatch] = useContext(Context)

  const handleClick = (uri) => {
    console.log(uri)
    dispatch({ type: 'set_song_uri', payload: uri })
    console.log(state.songUri)
  }

  return (
    <div>
      <button
        type="button"
        className="rounded-circle"
        onClick={() => handleClick(props.uri)}
      >
        <BsPlayFill />
      </button>
    </div>
  )
}
