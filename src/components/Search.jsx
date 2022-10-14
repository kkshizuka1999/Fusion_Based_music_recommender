import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, InputGroup, FormControl, Button, Offcanvas } from 'react-bootstrap'
import { useState } from 'react'
import '../index.css'
import SearchView from './SearchView'
import Slot from './Slot'

export default function Search() {
  //const [searchInput, setSearchInput] = useState("")
  const [songs, setSongs] = useState([])
  //React bootstrap
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function search(input) {
    let token = window.localStorage.getItem('token')
    //Get request using search to get the ArtistID
    var artistParams = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    }
    var tracks = await fetch('https://api.spotify.com/v1/search?q=' + input + '&type=track', artistParams)
      .then(response => response.json())
      .then(data => {
        setSongs(data.tracks.items)
      })
    console.log(songs)
  }

  return (
    <div className='SearchWindow'>
      <Button variant='primary' onClick={handleShow} className="showView">
        Set Song to Slot1
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton />
        <Offcanvas.Body>
          <Container className='input'>
            <InputGroup className='mb-3' size='lg'>
              <FormControl
                placeholder='Search For Artist'
                type='input'
                onChange={event => {
                  search(event.target.value)
                }}
              />
            </InputGroup>
          </Container>
          <Container className='cards'>
            <SearchView songs={songs} flag={0} />
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
      <div className='Songpick'>
        <Container>
          <Slot flag={0} />
        </Container>
      </div>
    </div>
  )
}