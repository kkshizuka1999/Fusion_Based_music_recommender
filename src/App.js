import Login from './components/Login';
import { useContext, useEffect, useState } from 'react';
import GetRondomSong from './components/GetRondomSong';
import Search from './components/Search';
import Fusion from './components/Fusion';
import './index.css';
import RecommendationView from './components/RecommendationView';
import { Context } from './utils/Store';
import { Button, Container } from 'react-bootstrap';
import Player from './components/Player';


function App() {
  const [token, setToken] = useState("")
  const [state] = useContext(Context)
  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    if (!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
      window.location.hash = ""
      window.localStorage.setItem("token", token)
      setToken(token)
    }
  }, [])

  const logout = () => {
    setToken("")
    window.localStorage.removeItem("token")
  }

  return (
    <div class="mb-5">
      <header className='App-header'>
        <h1>Fusion-Based Recommender System with Spotify API</h1>
        {!token ? <Login /> :
          <Container>
            <Button onClick={logout}>Logout</Button>
          </Container>
        }
      </header>
      <div className='frontview'>
        <Search />
        <Fusion />
        <GetRondomSong />
      </div>
      <Container>
        <RecommendationView songs={state.recommendationInfo} />
        <footer class="footer">
          <div class="fixed-bottom">
            <Player trackUri={state.songUri} />
          </div>
        </footer>
      </Container>
    </div>
  );
}

export default App;
