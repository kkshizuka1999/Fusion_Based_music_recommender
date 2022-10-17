import React, { useContext } from 'react'
import { Card } from 'react-bootstrap'
import { Context } from '../utils/Store'
import PlayButton from './PlayButton'

const Slot = ({ flag }) => {
  const [state] = useContext(Context)
  let slotInfo = {}
  if (flag === 0) {
    slotInfo = state.songInfoA
  } else {
    slotInfo = state.songInfoB
  }

  return (
    <div>
      <Card>
        <Card.Img src={slotInfo.image} />
        <Card.Body>
          <Card.Title>{slotInfo.name}</Card.Title>
          <Card.Subtitle>{slotInfo.artists}</Card.Subtitle>
          <PlayButton uri={slotInfo.uri} />
        </Card.Body>
      </Card>
    </div>
  )
}

export default Slot
