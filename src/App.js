import React, { useContext, useEffect } from 'react'
import GetRondomSong from './components/GetRondomSong'
import Search from './components/Search'
import Fusion from './components/Fusion'
import './index.css'
import RecommendationView from './components/RecommendationView'
import { StoreContext } from './utils/Store'
import Player from './components/Player'
import Layout from './components/Layout/Layout'
import Spacer from './utils/Spacer'
import './button.scss'
import Logout from './components/Logout'
import LoginComponent from './components/LoginComponent'

const App = () => {
  const [store, setStore] = useContext(StoreContext)
  const { token } = store
  useEffect(() => {
    const { hash } = window.location
    let localToken = window.localStorage.getItem('token')

    if (!localToken && hash) {
      // eslint-disable-next-line prefer-destructuring
      localToken = hash
        .substring(1)
        .split('&')
        .find((elem) => elem.startsWith('access_token'))
        .split('=')[1]
      window.location.hash = ''
      setStore({ type: 'set_token', payload: localToken })
    }
  }, [])

  return (
    <Layout>
      <div>
        <header className="mb-2 d-flex flex-column align-items-center justify-content-center">
          <h1>Fusion-Based Recommender with Spotify API</h1>
          {!token ? <LoginComponent /> : <Logout />}
          <Spacer size={16} />
        </header>
        <div className="mb-5">
          <div className="row">
            <div className="col">
              <h4 className="d-flex flex-column align-items-center border-bottom border-info">
                Slot1
              </h4>
              <Search />
            </div>
            <div className="col">
              <h4 className="d-flex flex-column align-items-center border-bottom border-info">
                Audio Features
              </h4>
              <Fusion />
            </div>
            <div className="col">
              <h4 className="d-flex flex-column align-items-center border-bottom border-info">
                Slot2
              </h4>
              <GetRondomSong />
            </div>
          </div>
        </div>
        <div className="mb-5">
          <RecommendationView songs={store.recommendationInfo} />
        </div>
        <footer className="footer">
          <div className="fixed-bottom">
            <Player trackUri={store.songUri} />
          </div>
        </footer>
      </div>
    </Layout>
  )
}

export default App
