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
        className="btn btn--circle btn--circle-c btn--shadow"
        onClick={() => handleClick(uri)}
      >
        <i>
          <BsPlayFill color="#555555" />
        </i>
      </button>
    </div>
  )
}

export default PlayButton
