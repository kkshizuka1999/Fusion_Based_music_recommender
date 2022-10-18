import React, { useContext, useEffect } from 'react'
import Login from './components/Login'
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
          {!token ? <Login /> : <Logout />}
          <Spacer size={16} />
        </header>
        <div className="container">
          <div className="row">
            <div className="col">
              <Search />
            </div>
            <div className="col">
              <Fusion />
            </div>
            <div className="col">
              <GetRondomSong />
            </div>
          </div>
        </div>
        <RecommendationView songs={store.recommendationInfo} />
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
