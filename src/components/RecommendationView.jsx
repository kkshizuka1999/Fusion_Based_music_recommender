import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Card } from 'react-bootstrap'
import '../index.css'
import PlayButton from './PlayButton'

const RecommendationView = ({ songs }) => {
  return (
    <div>
      <Row className="mx-2 row row-cols-5">
        {Object.values(songs).map((song) => {
          return (
            <Card key={song.id}>
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
        })}
      </Row>
    </div>
  )
}
export default RecommendationView
