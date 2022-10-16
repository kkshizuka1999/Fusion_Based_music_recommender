import React from 'react'
import { Card } from 'react-bootstrap'
import PlayButton from './PlayButton'

interface Props {
  song: Spotify.Track
}

const TrackCard: React.FC<Props> = ({ song }) => {
  return (
    <Card>
      <Card.Img src={song.album.images[0].url} />
      <Card.Body>
        <Card.Title>{song.name}</Card.Title>
        <Card.Subtitle>
          {song.artists
            .map((artist) => {
              return artist.name
            })
            .join(' & ')}
        </Card.Subtitle>
        <PlayButton uri={song.uri} />
      </Card.Body>
    </Card>
  )
}

export default TrackCard
