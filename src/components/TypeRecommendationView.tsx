import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row } from 'react-bootstrap'
import '../index.css'
import TrackCard from './TrackCard'

interface Props {
  songs: [Spotify.Track]
}

const TypeRecommendationView: React.FC<Props> = ({ songs }) => {
  return (
    <div>
      <Row className="mx-2 row row-cols-5">
        {Object.values(songs).map((song) => {
          return <TrackCard key={song.id} song={song} />
        })}
      </Row>
    </div>
  )
}

export default TypeRecommendationView