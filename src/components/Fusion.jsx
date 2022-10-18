import React, { useContext } from 'react'
import { Context } from '../utils/Store'

const Fusion = () => {
  let recommendation = {}
  const [state, dispatch] = useContext(Context)

  async function getRecommendation() {
    recommendation = {}
    const { fusion } = document
    const { token } = state
    // Get request using search to get the ArtistID
    const AFParams = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
    await fetch(
      `https://api.spotify.com/v1/recommendations?seed_tracks=${
        state.slotA.id
      },${state.slotB.id}&target_acousticness=${
        fusion.acousticness[0].checked
          ? fusion.acousticness[0].value
          : fusion.acousticness[1].value
      }&target_danceability=${
        fusion.danceability[0].checked
          ? fusion.danceability[0].value
          : fusion.danceability[1].value
      }&target_energy=${
        fusion.energy[0].checked
          ? fusion.energy[0].value
          : fusion.energy[1].value
      }&target_instrumentalness${
        fusion.instrumentalness[0].checked
          ? fusion.instrumentalness[0].value
          : fusion.instrumentalness[1].value
      }&target_key${
        fusion.key[0].checked ? fusion.key[0].value : fusion.key[1].value
      }&target_liveness${
        fusion.liveness[0].checked
          ? fusion.liveness[0].value
          : fusion.liveness[1].value
      }&target_loudness${
        fusion.loudness[0].checked
          ? fusion.loudness[0].value
          : fusion.loudness[1].value
      }&target_mode${
        fusion.mode[0].checked ? fusion.mode[0].value : fusion.mode[1].value
      }&target_speechiness${
        fusion.speechiness[0].checked
          ? fusion.speechiness[0].value
          : fusion.speechiness[1].value
      }&target_tempo${
        fusion.tempo[0].checked ? fusion.tempo[0].value : fusion.tempo[1].value
      }&target_valence${
        fusion.valence[0].checked
          ? fusion.valence[0].value
          : fusion.valence[1].value
      }&limit=100`,
      AFParams
    )
      .then((response) => response.json())
      .then((data) => {
        recommendation = data.tracks
      })

    for (let i = recommendation.length - 1; i > 0; i -= 1) {
      // 0〜(i+1)の範囲で値を取得
      const r = Math.floor(Math.random() * (i + 1))

      // 要素の並び替えを実行
      const tmp = recommendation[i]
      recommendation[i] = recommendation[r]
      recommendation[r] = tmp
    }

    dispatch({ type: 'set_recommendation_info', payload: recommendation })
  }

  return (
    <div>
      <form name="fusion">
        <table>
          <tr>
            <div className="radio">
              <input
                className="radio-input-1"
                id="acousticness"
                type="radio"
                name="acousticness"
                value={state.slotA.acousticness}
              />
              <label htmlFor="acousticness" className="radio-label" />
              <input
                className="radio-input-2"
                id="acousticness-2"
                type="radio"
                name="acousticness"
                value={state.slotB.acousticness}
              />
              <label htmlFor="acousticness-2" className="radio-label-2" />
            </div>
          </tr>
          <tr>
            <td>
              <input
                type="radio"
                name="danceability"
                value={state.slotA.danceability}
              />
            </td>
            <td>
              <label htmlFor="danceability">danceability</label>
            </td>
            <td>
              <input
                type="radio"
                name="danceability"
                value={state.slotB.danceability}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input type="radio" name="energy" value={state.slotA.energy} />
            </td>
            <td>
              <label htmlFor="energy">energy</label>
            </td>
            <td>
              <input type="radio" name="energy" value={state.slotB.energy} />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="radio"
                name="instrumentalness"
                value={state.slotA.instrumentalness}
              />
            </td>
            <td>
              <label htmlFor="instrumentalness">instrumentalness</label>
            </td>
            <td>
              <input
                type="radio"
                name="instrumentalness"
                value={state.slotB.instrumentalness}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input type="radio" name="key" value={state.slotA.key} />
            </td>
            <td>
              <label htmlFor="key">key</label>
            </td>
            <td>
              <input type="radio" name="key" value={state.slotB.key} />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="radio"
                name="liveness"
                value={state.slotA.liveness}
              />
            </td>
            <td>
              <label htmlFor="liveness">liveness</label>
            </td>
            <td>
              <input
                type="radio"
                name="liveness"
                value={state.slotB.liveness}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="radio"
                name="loudness"
                value={state.slotA.loudness}
              />
            </td>
            <td>
              <label htmlFor="loudness">loudness</label>
            </td>
            <td>
              <input
                type="radio"
                name="loudness"
                value={state.slotB.loudness}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input type="radio" name="mode" value={state.slotA.mode} />
            </td>
            <td>
              <label htmlFor="mode">mode</label>
            </td>
            <td>
              <input type="radio" name="mode" value={state.slotB.mode} />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="radio"
                name="speechiness"
                value={state.slotA.speechiness}
              />
            </td>
            <td>
              <label htmlFor="speechiness">speechiness</label>
            </td>
            <td>
              <input
                type="radio"
                name="speechiness"
                value={state.slotB.speechiness}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input type="radio" name="tempo" value={state.slotA.tempo} />
            </td>
            <td>
              <label htmlFor="tempo">tempo</label>
            </td>
            <td>
              <input type="radio" name="tempo" value={state.slotB.tempo} />
            </td>
          </tr>
          <tr>
            <td>
              <input type="radio" name="valence" value={state.slotA.valence} />
            </td>
            <td>
              <label htmlFor="valence">valence</label>
            </td>
            <td>
              <input type="radio" name="valence" value={state.slotB.valence} />
            </td>
          </tr>
        </table>
      </form>
      <div className="center-block">
        <button
          type="button"
          className="ui-button fancy-button pop-onhover bg-gradient3"
          onClick={getRecommendation}
        >
          <span className="auth-btn">Fusion</span>
        </button>
      </div>
    </div>
  )
}

export default Fusion
