import React, { useContext } from 'react'
import { Card } from 'react-bootstrap'
import { StoreContext } from '../utils/Store'
import PlayButton from './PlayButton'

const Slot = ({ flag }) => {
  const [store] = useContext(StoreContext)
  let slotInfo = {}
  function isEmpty(obj) {
    return !Object.keys(obj).length
  }
  if (flag === 0) {
    slotInfo = store.songInfoA
  } else {
    slotInfo = store.songInfoB
  }

  const songUrl = `https://open.spotify.com/track/${slotInfo.songId}`

  return (
    <div>
      <Card className={isEmpty(slotInfo) ? 'd-none' : ''}>
        <Card.Img src={slotInfo.image} />
        <Card.Body>
          <Card.Title>
            <a
              href={songUrl}
              className="link-dark text-decoration-none"
              target="_blank"
              rel="noreferrer"
            >
              {slotInfo.name}
            </a>
          </Card.Title>
          <Card.Subtitle>{slotInfo.artists}</Card.Subtitle>
          <div className="mb-2 d-flex flex-row align-items-center justify-content-end">
            <div className="px-2">
              <PlayButton uri={slotInfo.songUri} />
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Slot
