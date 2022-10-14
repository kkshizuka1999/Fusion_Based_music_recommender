import React from 'react'
import { useContext } from 'react'
import { Context } from '../utils/Store'
import { BsPlayFill } from "react-icons/bs";


export default function PlayButton(props) {
  const [state, dispatch] = useContext(Context)

  const handleClick = (uri) => {
    console.log(uri)
    dispatch({ type: 'set_song_uri', payload: uri })
    console.log(state.songUri)
  }

  return (
    <div>
      <button type="button" class="btn btn-primary btn-sm" onClick={() => handleClick(props.uri)}>
        <BsPlayFill />
      </button>
    </div>
  )
}
