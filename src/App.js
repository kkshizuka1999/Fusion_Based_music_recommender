import React, { useContext, useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Login from './components/Login'
import GetRondomSong from './components/GetRondomSong'
import Search from './components/Search'
import Fusion from './components/Fusion'
import './index.css'
import RecommendationView from './components/RecommendationView'
import { Context } from './utils/Store'
import Player from './components/Player'
import Layout from './components/Layout/Layout'
import Spacer from './utils/Spacer'
import './button.scss'
import Logout from './components/Logout'

const App = () => {
  const [state, dispatch] = useContext(Context)
  const { token } = state
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
      dispatch({ type: 'set_token', payload: localToken })
    }
  }, [])

  return (
    <Layout>
      <div className="mb-5">
        <header className="App-header">
          <h1>Fusion-Based Recommender with Spotify API</h1>
          {!token ? <Login /> : <Logout />}
          <Spacer size={16} />
        </header>
        <div className="frontview">
          <Search />
          <Fusion />
          <GetRondomSong />
        </div>
        <Container>
          <RecommendationView songs={state.recommendationInfo} />
          <footer className="footer">
            <div className="fixed-bottom">
              <Player trackUri={state.songUri} />
            </div>
          </footer>
        </Container>
      </div>
    </Layout>
  )
}

export default App
