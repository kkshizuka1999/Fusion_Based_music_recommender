import React from 'react'
import PlayButton from './PlayButton'

const TrackCard = ({ song }) => {
  return (
    <div className="border-bottom border-info px-2 mt-3">
      <div className="d-flex flex-row align-items-center justify-content-start">
        <img src={song.album.images[0].url} style={{ height: '64px' }} alt="" />
        <div className="px-2 mt-3 lm-3">
          <div>{song.name}</div>
          <div className="text-muted">
            {song.artists
              .map((artist) => {
                return artist.name
              })
              .join(' & ')}
          </div>
        </div>
      </div>
      <div className="mb-2 d-flex flex-row align-items-center justify-content-end">
        <div className="pl-2">
          <PlayButton uri={song.uri} />
        </div>
      </div>
    </div>
  )
}

export default TrackCard
