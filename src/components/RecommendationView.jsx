import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../index.css'
import '../button.scss'
import TrackCard from './TrackCard'

const RecommendationView = ({ songs }) => {
  const [loadSongs, setLoadSongs] = useState(10)
  const [isEmpty, setIsEmpty] = useState(false)

  useEffect(() => {
    setLoadSongs(10)
    setIsEmpty(false)
  }, [songs])

  const displayMore = () => {
    if (loadSongs > songs.length) {
      setIsEmpty(true)
    } else {
      setLoadSongs(loadSongs + 10)
    }
  }
  return (
    <div className="w-100">
      <div className="recoview">
        {songs.slice(0, loadSongs).map((song) => {
          return <TrackCard key={song.id} song={song} />
        })}
      </div>
      <div className="d-flex justify-content-center">
        <button
          type="button"
          className="ui-button fancy-button bg-gradient1"
          // eslint-disable-next-line no-unneeded-ternary
          disabled={isEmpty || !songs.length}
          onClick={displayMore}
        >
          <span className="setsong-btn">More</span>
        </button>
      </div>
    </div>
  )
}
export default RecommendationView
