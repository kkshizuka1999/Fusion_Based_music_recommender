import React, { useState, useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Offcanvas } from 'react-bootstrap'
import '../index.css'
import '../button.scss'
import SearchView from './SearchView'
import Slot from './Slot'
import { StoreContext } from '../utils/Store'

const GetRondomSong = () => {
  let resSongs = {}
  const [songs, setSongs] = useState([])
  // React bootstrap
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [store] = useContext(StoreContext)
  const { token } = store

  function getRandomSearch() {
    // A list of all characters that can be chosen.
    const characters = 'abcdefghijklmnopqrstuvwxyz'
    // Gets a random character from the characters string.
    const randomCharacter = characters.charAt(
      Math.floor(Math.random() * characters.length)
    )
    let randomSearch = ''
    // Places the wildcard character at the beginning, or both beginning and end, randomly.
    switch (Math.round(Math.random())) {
      case 0:
        randomSearch = `${randomCharacter}%20`
        break
      case 1:
        randomSearch = `%20${randomCharacter}%20`
        break
      default:
        return randomSearch
    }
    return randomSearch
  }

  async function search() {
    resSongs = {}
    const randomOffset = Math.ceil(Math.random() * 1000)
    const type = 'track'
    // Get request using search to get the ArtistID
    const artistParams = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
    await fetch(
      `https://api.spotify.com/v1/search?q=${getRandomSearch()}&type=${type}&offset=${randomOffset}&limit=50`,
      artistParams
    )
      .then((response) => response.json())
      .then((data) => {
        resSongs = data.tracks.items
      })
    for (let i = resSongs.length - 1; i > 0; i -= 1) {
      // 0〜(i+1)の範囲で値を取得
      const r = Math.floor(Math.random() * (i + 1))

      // 要素の並び替えを実行
      const tmp = resSongs[i]
      resSongs[i] = resSongs[r]
      resSongs[r] = tmp
    }
    setSongs(resSongs)
  }

  return (
    <div>
      <div className="d-flex justify-content-center">
        <button
          type="button"
          className="ui-button fancy-button bg-gradient1 showView"
          disabled={!token}
          onClick={handleShow}
        >
          <span className="setsong-btn">Set to Slot2</span>
        </button>
      </div>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton />
        <Offcanvas.Body>
          <div className="d-flex justify-content-center">
            <button
              type="button"
              className="ui-button fancy-button pop-onhover bg-gradient1 showView"
              onClick={search}
            >
              <span className="setsong-btn">RondomSong</span>
            </button>
          </div>
          <Container>
            <SearchView songs={songs} flag={1} />
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
      <div className="Songpick">
        <Container>
          <Slot flag={1} />
        </Container>
      </div>
    </div>
  )
}

export default GetRondomSong
