import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BsPlusLg } from 'react-icons/bs'
import { StoreContext } from '../utils/Store'
import '../index.css'

const GetAudioFeaturesButton = ({ song, flag: defaultFlag }) => {
  const [state, dispatch] = useContext(StoreContext)
  let features = {}
  let songInfo = {}
  async function getAF(flag, id, img, songname, artistsname, uri) {
    features = {
      id,
    }
    songInfo = {
      image: img,
      name: songname,
      artists: artistsname,
      uri,
    }
    const { token } = state
    // Get request using search to get the ArtistID
    const AFParams = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
    await fetch(`https://api.spotify.com/v1/audio-features/${id}`, AFParams)
      .then((response) => response.json())
      .then((data) => {
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
      <button
        type="button"
        className="rounded-circle"
        onClick={() =>
          getAF(
            defaultFlag,
            song.id,
            song.album.images[0].url,
            song.name,
            song.artists
              .map((artist) => {
                return artist.name
              })
              .join(' & '),
            song.uri
          )
        }
      >
        <BsPlusLg />
      </button>
    </div>
  )
}

export default GetAudioFeaturesButton
