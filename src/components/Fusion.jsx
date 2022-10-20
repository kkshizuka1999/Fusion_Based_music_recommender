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
    const acousticnessItem = fusion.acousticness[0].checked
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
    const durationMsItem = fusion.duration_ms[0].checked
      ? fusion.duration_ms[0].value
      : fusion.duration_ms[1].value
    const timeSignatureItem = fusion.time_signature[0].checked
      ? fusion.time_signature[0].value
      : fusion.time_signature[1].value
    const valenceItem = fusion.valence[0].checked
      ? fusion.valence[0].value
      : fusion.valence[1].value

    // URL構築
    const url = `${baseUrl}?seed_tracks=${baseSongItem}&target_acousticness=${acousticnessItem}&target_danceability=${danceabilityItem}&target_energy=${energyItem}&target_instrumentalness=${instrumentalnessItem}&target_key=${keyItem}&target_liveness=${livenessItem}&target_duration_ms=${durationMsItem}&target_time_signature=${timeSignatureItem}&target_mode=${modeItem}&target_speechiness=${speechinessItem}&target_tempo=${tempoItem}&target_valence=${valenceItem}&target_loudness=${loudnessItem}&limit=100`
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
    <div className="py-5 px-5">
      <form name="fusion">
        <div className="d-flex flex-column">
          <div className="d-flex  justify-content-between">
            <input type="radio" name="basesong" value={slotA.id} />
            <label htmlFor="basesong">基になる曲</label>
            <input type="radio" name="basesong" value={slotB.id} />
          </div>
          <div className="d-flex  justify-content-between">
            <input
              type="radio"
              name="acousticness"
              value={slotA.acousticness}
            />
            <label htmlFor="acousticness">アコースティック感</label>
            <input
              type="radio"
              name="acousticness"
              value={slotB.acousticness}
            />
          </div>
          <div className="d-flex  justify-content-between">
            <input
              type="radio"
              name="danceability"
              value={slotA.danceability}
            />
            <label htmlFor="danceability">踊りやすさ</label>
            <input
              type="radio"
              name="danceability"
              value={slotB.danceability}
            />
          </div>
          <div className="d-flex  justify-content-between">
            <input type="radio" name="energy" value={slotA.energy} />
            <label htmlFor="energy">力強さ</label>
            <input type="radio" name="energy" value={slotB.energy} />
          </div>
          <div className="d-flex  justify-content-between">
            <input
              type="radio"
              name="instrumentalness"
              value={slotA.instrumentalness}
            />
            <label htmlFor="instrumentalness">歌声の多さ</label>
            <input
              type="radio"
              name="instrumentalness"
              value={slotB.instrumentalness}
            />
          </div>
          <div className="d-flex  justify-content-between">
            <input type="radio" name="key" value={slotA.key} />
            <label htmlFor="key">キー</label>
            <input type="radio" name="key" value={slotB.key} />
          </div>
          <div className="d-flex  justify-content-between">
            <input type="radio" name="liveness" value={slotA.liveness} />
            <label htmlFor="liveness">ライブ感</label>
            <input type="radio" name="liveness" value={slotB.liveness} />
          </div>
          <div className="d-flex  justify-content-between">
            <input type="radio" name="loudness" value={slotA.loudness} />
            <label htmlFor="loudness">音量</label>
            <input type="radio" name="loudness" value={slotB.loudness} />
          </div>
          <div className="d-flex  justify-content-between">
            <input type="radio" name="mode" value={slotA.mode} />
            <label htmlFor="mode">調性（メジャーorマイナー）</label>
            <input type="radio" name="mode" value={slotB.mode} />
          </div>
          <div className="d-flex  justify-content-between">
            <input type="radio" name="speechiness" value={slotA.speechiness} />
            <label htmlFor="speechiness">歌詞の多さ</label>
            <input type="radio" name="speechiness" value={slotB.speechiness} />
          </div>
          <div className="d-flex  justify-content-between">
            <input type="radio" name="tempo" value={slotA.tempo} />
            <label htmlFor="tempo">BPM</label>
            <input type="radio" name="tempo" value={slotB.tempo} />
          </div>
          <div className="d-flex  justify-content-between">
            <input type="radio" name="duration_ms" value={slotA.duration_ms} />
            <label htmlFor="tempo">曲の長さ</label>
            <input type="radio" name="duration_ms" value={slotB.duration_ms} />
          </div>
          <div className="d-flex  justify-content-between">
            <input
              type="radio"
              name="time_signature"
              value={slotA.time_signature}
            />
            <label htmlFor="tempo">拍数</label>
            <input
              type="radio"
              name="time_signature"
              value={slotB.time_signature}
            />
          </div>
          <div className="d-flex  justify-content-between">
            <input type="radio" name="valence" value={slotA.valence} />
            <label htmlFor="valence">明るさ</label>
            <input type="radio" name="valence" value={slotB.valence} />
          </div>
        </div>
      </form>
      <div className="py-2 d-flex justify-content-center">
        <button
          type="button"
          className="ui-button fancy-button pop-onhover bg-gradient3"
          disabled={!Object.keys(slotA).length || !Object.keys(slotB).length}
          onClick={getRecommendation}
        >
          <span className="auth-btn">Fusion</span>
        </button>
      </div>
    </div>
  )
}

export default Fusion
