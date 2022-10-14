import React, { useContext } from 'react'
import { Context } from '../utils/Store'
import { Card } from 'react-bootstrap'
import PlayButton from './PlayButton';

export default function Slot(props) {
  const [state] = useContext(Context)
  var slotInfo = {}
  if (props.flag === 0) {
    slotInfo = state.songInfoA
  } else {
    slotInfo = state.songInfoB
  }

  return (
    <div>
      <Card>
        <Card.Img src={slotInfo.image} />
        <Card.Body>
          <Card.Title>
            {slotInfo.name}
          </Card.Title>
          <Card.Subtitle>
            {slotInfo.artists}
          </Card.Subtitle>
          <PlayButton uri={slotInfo.uri} />
        </Card.Body>
      </Card>
    </div>
  )
}
