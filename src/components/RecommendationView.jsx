import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row } from 'react-bootstrap'
import '../index.css'
import TrackCard from './TrackCard'

const RecommendationView = ({ songs }) => {
  return (
    <div>
      {Object.values(songs).map((song) => {
        return <TrackCard key={song.id} song={song} />
      })}
    </div>
  )
}
export default RecommendationView
