import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Offcanvas,
} from 'react-bootstrap'

import '../index.css'
import SearchView from './SearchView'
import Slot from './Slot'
import '../button.scss'

const Search = () => {
  // const [searchInput, setSearchInput] = useState("")
  const [songs, setSongs] = useState([])
  // React bootstrap
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  async function search(input) {
    const token = window.localStorage.getItem('token')
    // Get request using search to get the ArtistID
    const artistParams = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
    const tracks = await fetch(
      `https://api.spotify.com/v1/search?q=${input}&type=track`,
      artistParams
    )
      .then((response) => response.json())
      .then((data) => {
        setSongs(data.tracks.items)
      })
    console.log(songs)
  }

  return (
    <div className="SearchWindow">
      <button
        className="ui-button fancy-button bg-gradient1 showView"
        onClick={handleShow}
      >
        <span className="setsong-btn">Set to Slot1</span>
      </button>
      <Offcanvas show={show} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton />
        <Offcanvas.Body>
          <Container className="input">
            <InputGroup className="mb-3" size="lg">
              <FormControl
                placeholder="Search For Artist"
                type="input"
                onChange={(event) => {
                  search(event.target.value)
                }}
              />
            </InputGroup>
          </Container>
          <Container className="cards">
            <SearchView songs={songs} flag={0} />
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
      <div className="Songpick">
        <Container>
          <Slot flag={0} />
        </Container>
      </div>
    </div>
  )
}

export default Search
