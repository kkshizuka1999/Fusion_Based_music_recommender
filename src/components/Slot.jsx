import React, { useContext } from 'react'
import { Card } from 'react-bootstrap'
import { StoreContext } from '../utils/Store'
import PlayButton from './PlayButton'

const Slot = ({ flag }) => {
  const [store] = useContext(StoreContext)
  let slotInfo = {}
  if (flag === 0) {
    slotInfo = store.songInfoA
  } else {
    slotInfo = store.songInfoB
  }

  return (
    <div>
      <Card>
        <Card.Img src={slotInfo.image} />
        <Card.Body>
          <Card.Title>{slotInfo.name}</Card.Title>
          <Card.Subtitle>{slotInfo.artists}</Card.Subtitle>
          <div className="mb-2 d-flex flex-row align-items-center justify-content-end">
            <div className="pl-2">
              <PlayButton uri={slotInfo.uri} />
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Slot
