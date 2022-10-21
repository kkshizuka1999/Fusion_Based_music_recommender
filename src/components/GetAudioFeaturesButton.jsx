import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BsPlusLg } from 'react-icons/bs'
import { StoreContext } from '../utils/Store'
import '../index.css'

const GetAudioFeaturesButton = ({ song, flag: defaultFlag }) => {
  const [store, setStore] = useContext(StoreContext)
  let features = {}
  let songInfo = {}
  async function getAF(flag, id, img, songname, artistsname) {
    features = {
      id,
    }
    songInfo = {
      image: img,
      name: songname,
      artists: artistsname,
      songId: id,
    }
    const { token } = store
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
        features.duration_ms = data.duration_ms
        features.time_signature = data.time_signature
      })

    if (flag === 0) {
      setStore({ type: 'send_to_slotA', payload: features })
      setStore({ type: 'set_infoA', payload: songInfo })
    } else {
      setStore({ type: 'send_to_slotB', payload: features })
      setStore({ type: 'set_infoB', payload: songInfo })
    }
  }
  return (
    <div>
      <button
        type="button"
        className="btn btn--circle btn--circle-c btn--shadow"
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
        <i>
          <BsPlusLg color="#555555" />
        </i>
      </button>
    </div>
  )
}

export default GetAudioFeaturesButton
