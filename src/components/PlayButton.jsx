import React, { useContext } from 'react'
import { BsPlayFill } from 'react-icons/bs'
import { StoreContext } from '../utils/Store'

const PlayButton = ({ uri }) => {
  const [store, setStore] = useContext(StoreContext)

  const handleClick = () => {
    setStore({ type: 'set_song_uri', payload: uri })
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
