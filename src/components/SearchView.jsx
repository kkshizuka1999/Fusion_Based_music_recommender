import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../index.css'
import GetAudioFeaturesButton from './GetAudioFeaturesButton'
import PlayButton from './PlayButton'

export default function SearchView({ songs, flag }) {
  return (
    <div className='pr-2 my-3 lm-2'>
      {songs.map((song) => {
        return (
          <div className='border-bottom border-info px-2 mt-3'>
            <div className='d-flex flex-row align-items-center justify-content-start'>
              <img src={song.album.images[0].url} style={{ height: '64px' }} />
              <div className='px-2 mt-3 lm-3'>
                <div>{song.name}</div>
                <div className='text-muted'>
                  {song.artists.map(artist => {
                    return artist.name
                  }).join(" & ")}
                </div>
              </div>
            </div>
            <div class='mb-2 d-flex flex-row align-items-center justify-content-end'>
              <div class="pl-2">
                <GetAudioFeaturesButton song={song} flag={flag} />
              </div>
              <div class="pl-2">
                <PlayButton uri={song.uri} />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
