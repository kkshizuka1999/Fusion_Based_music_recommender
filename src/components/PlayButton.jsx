import React, { useContext } from 'react'
import { BsPlayFill } from 'react-icons/bs'
import { Context } from '../utils/Store'

const PlayButton = ({ uri }) => {
  const [state, dispatch] = useContext(Context)

  const handleClick = () => {
    dispatch({ type: 'set_song_uri', payload: uri })
  }

  return (
    <div>
      <button
        type="button"
        className="rounded-circle"
        onClick={() => handleClick(uri)}
      >
        <BsPlayFill />
      </button>
    </div>
  )
}

export default PlayButton
