import React, { useContext } from 'react'
import { StoreContext } from '../utils/Store'

const Fusion = () => {
  const [store, setStore] = useContext(StoreContext)
  const { slotA, slotB } = store
  let recommendation = []

  const getRecommendation = async () => {
    const { fusion } = document
    const { token } = store
    const params = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
    const baseUrl = 'https://api.spotify.com/v1/recommendations'
    const baseSongItem = fusion.basesong[0].checked
      ? fusion.basesong[0].value
      : fusion.basesong[1].value
    const acousticnesItem = fusion.acousticness[0].checked
      ? fusion.acousticness[0].value
      : fusion.acousticness[1].value
    const danceabilityItem = fusion.danceability[0].checked
      ? fusion.danceability[0].value
      : fusion.danceability[1].value
    const energyItem = fusion.energy[0].checked
      ? fusion.energy[0].value
      : fusion.energy[1].value
    const instrumentalnessItem = fusion.instrumentalness[0].checked
      ? fusion.instrumentalness[0].value
      : fusion.instrumentalness[1].value
    const keyItem = fusion.key[0].checked
      ? fusion.key[0].value
      : fusion.key[1].value
    const livenessItem = fusion.liveness[0].checked
      ? fusion.liveness[0].value
      : fusion.liveness[1].value
    const loudnessItem = fusion.loudness[0].checked
      ? fusion.loudness[0].value
      : fusion.loudness[1].value
    const modeItem = fusion.mode[0].checked
      ? fusion.mode[0].value
      : fusion.mode[1].value
    const speechinessItem = fusion.speechiness[0].checked
      ? fusion.speechiness[0].value
      : fusion.speechiness[1].value
    const tempoItem = fusion.tempo[0].checked
      ? fusion.tempo[0].value
      : fusion.tempo[1].value
    const valenceItem = fusion.valence[0].checked
      ? fusion.valence[0].value
      : fusion.valence[1].value

    // URL構築
    const url = `${baseUrl}?seed_tracks=${baseSongItem}&target_acousticness=${acousticnesItem}&target_danceability=${danceabilityItem}&target_energy=${energyItem}&target_instrumentalness=${instrumentalnessItem}&target_key=${keyItem}&target_liveness=${livenessItem}&target_mode=${modeItem}&target_speechiness=${speechinessItem}&target_tempo=${tempoItem}&target_valence=${valenceItem}&target_loudness=${loudnessItem}&limit=100`
    try {
      const response = await fetch(url, params)
      recommendation = (await response.json()).tracks
      setStore({
        type: 'set_recommendation_info',
        payload: recommendation,
      })
    } catch (error) {
      // エラーハンドリング記述
      // 一旦consoleで出しておく
      console.log(error)
    }
  }

  return (
    <div className="mb-2 d-flex flex-column align-items-center justify-content-center">
      <form name="fusion">
        <table>
          <tr>
            <td>
              <input type="radio" name="basesong" value={slotA.id} />
            </td>
            <td>
              <label htmlFor="acousticness">Seed Song</label>
            </td>
            <td>
              <input type="radio" name="basesong" value={slotB.id} />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="radio"
                name="acousticness"
                value={slotA.acousticness}
              />
            </td>
            <td>
              <label htmlFor="acousticness">Acousticness</label>
            </td>
            <td>
              <input
                type="radio"
                name="acousticness"
                value={slotB.acousticness}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="radio"
                name="danceability"
                value={slotA.danceability}
              />
            </td>
            <td>
              <label htmlFor="danceability">Danceability</label>
            </td>
            <td>
              <input
                type="radio"
                name="danceability"
                value={slotB.danceability}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input type="radio" name="energy" value={slotA.energy} />
            </td>
            <td>
              <label htmlFor="energy">Energy</label>
            </td>
            <td>
              <input type="radio" name="energy" value={slotB.energy} />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="radio"
                name="instrumentalness"
                value={slotA.instrumentalness}
              />
            </td>
            <td>
              <label htmlFor="instrumentalness">Instrumentalness</label>
            </td>
            <td>
              <input
                type="radio"
                name="instrumentalness"
                value={slotB.instrumentalness}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input type="radio" name="key" value={slotA.key} />
            </td>
            <td>
              <label htmlFor="key">Key</label>
            </td>
            <td>
              <input type="radio" name="key" value={slotB.key} />
            </td>
          </tr>
          <tr>
            <td>
              <input type="radio" name="liveness" value={slotA.liveness} />
            </td>
            <td>
              <label htmlFor="liveness">Liveness</label>
            </td>
            <td>
              <input type="radio" name="liveness" value={slotB.liveness} />
            </td>
          </tr>
          <tr>
            <td>
              <input type="radio" name="loudness" value={slotA.loudness} />
            </td>
            <td>
              <label htmlFor="loudness">Loudness</label>
            </td>
            <td>
              <input type="radio" name="loudness" value={slotB.loudness} />
            </td>
          </tr>
          <tr>
            <td>
              <input type="radio" name="mode" value={slotA.mode} />
            </td>
            <td>
              <label htmlFor="mode">Mode</label>
            </td>
            <td>
              <input type="radio" name="mode" value={slotB.mode} />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="radio"
                name="speechiness"
                value={slotA.speechiness}
              />
            </td>
            <td>
              <label htmlFor="speechiness">Speechiness</label>
            </td>
            <td>
              <input
                type="radio"
                name="speechiness"
                value={slotB.speechiness}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input type="radio" name="tempo" value={slotA.tempo} />
            </td>
            <td>
              <label htmlFor="tempo">Tempo</label>
            </td>
            <td>
              <input type="radio" name="tempo" value={slotB.tempo} />
            </td>
          </tr>
          <tr>
            <td>
              <input type="radio" name="valence" value={slotA.valence} />
            </td>
            <td>
              <label htmlFor="valence">Valence</label>
            </td>
            <td>
              <input type="radio" name="valence" value={slotB.valence} />
            </td>
          </tr>
        </table>
      </form>
      <button
        type="button"
        className="ui-button fancy-button pop-onhover bg-gradient3"
        onClick={getRecommendation}
      >
        <span className="auth-btn">Fusion</span>
      </button>
    </div>
  )
}

export default Fusion
