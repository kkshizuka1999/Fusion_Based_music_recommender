import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Button, Offcanvas } from 'react-bootstrap';
import '../index.css'
import SearchView from './SearchView';
import Slot from './Slot';

export default function GetRondomSong() {
  const [songs, setSongs] = useState([])
  //React bootstrap
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function getRandomSearch() {
    // A list of all characters that can be chosen.
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    // Gets a random character from the characters string.
    const randomCharacter = characters.charAt(Math.floor(Math.random() * characters.length));
    let randomSearch = '';
    // Places the wildcard character at the beginning, or both beginning and end, randomly.
    switch (Math.round(Math.random())) {
      case 0:
        randomSearch = randomCharacter + '%20';
        break;
      case 1:
        randomSearch = '%20' + randomCharacter + '%20';
        break;
    }
    return randomSearch;
  }

  async function search() {
    let token = window.localStorage.getItem('token');
    const randomOffset = Math.ceil(Math.random() * 1000);
    const type = 'track'
    //Get request using search to get the ArtistID
    var artistParams = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    }
    var tracks = await fetch('https://api.spotify.com/v1/search?q=' + getRandomSearch() + '&type=' + type + '&offset=' + randomOffset, artistParams)
      .then(response => response.json())
      .then(data => {
        setSongs(data.tracks.items)
      })
  }

  return (
    <div className='SearchWindow'>
      <Button variant='primary' onClick={handleShow} className="showView">
        Set Song to Slot2
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton />
        <Offcanvas.Body>
          <Button className="random-btn" onClick={search}>
            RondomSong
          </Button>
          <Container>
            <SearchView songs={songs} flag={1} />
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
      <div className='Songpick'>
        <Container>
          <Slot flag={1} />
        </Container>
      </div>
    </div>
  )
}