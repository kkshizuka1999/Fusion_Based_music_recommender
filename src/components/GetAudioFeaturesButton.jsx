import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Context } from '../utils/Store'
import { BsPlusLg } from "react-icons/bs";
import '../index.css'

export default function GetAudioFeaturesButton(props) {
  const [state, dispatch] = useContext(Context)
  var features = {}
  var songInfo = {}
  async function getAF(flag, id, img, songname, artistsname, uri) {
    console.log(id)
    features = {
      id: id
    }
    songInfo = {
      image: img,
      name: songname,
      artists: artistsname,
      uri: uri
    }
    let token = window.localStorage.getItem("token")
    //Get request using search to get the ArtistID
    var AFParams = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      }
    }
    var tracks = await fetch('https://api.spotify.com/v1/audio-features/' + id, AFParams)
      .then(response => response.json())
      .then(data => {
        features.acousticness = data.acousticness
        features.danceability = data.danceability
        features.energy = data.energy
        features.instrumentalness = data.instrumentalness
        features.key = data.key
        features.liveness = data.liveness
        features.loudness = data.loudness
        features.mode = data.mode
        features.speechiness = data.speechiness
        features.tempo = data.tempo
        features.valence = data.valence
      })

    if (flag === 0) {
      dispatch({ type: 'send_to_slotA', payload: features })
      dispatch({ type: 'set_infoA', payload: songInfo })
    } else {
      dispatch({ type: 'send_to_slotB', payload: features })
      dispatch({ type: 'set_infoB', payload: songInfo })
    }

  }
  return (
    <div>
      <button type="button" class="btn btn-primary btn-sm" onClick={() => getAF(
        props.flag,
        props.song.id,
        props.song.album.images[0].url,
        props.song.name,
        props.song.artists.map(artist => { return artist.name }).join(" & "),
        props.song.uri,
      )}>
        <BsPlusLg/>
      </button>
    </div>
  )
}