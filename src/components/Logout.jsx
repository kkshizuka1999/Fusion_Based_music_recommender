import React, { useContext } from 'react'

import { Context } from '../utils/Store'

const Logout = () => {
  const [state, dispatch] = useContext(Context)
  const logout = () => {
    dispatch({ type: 'set_token', payload: '' })
    window.location.reload()
  }
  return (
    <button
      type="button"
      onClick={logout}
      className="ui-button fancy-button pop-onhover bg-gradient2"
    >
      <span className="auth-btn">Logout</span>
    </button>
  )
}

export default Logout
