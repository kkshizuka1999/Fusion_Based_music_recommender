import React, { createContext, useReducer, useMemo } from 'react'

const initialState = {
  slotA: {},
  slotB: {},
  songInfoA: {},
  songInfoB: {},
  recommendationInfo: {},
  songUri: '',
}

export const Context = createContext(initialState)

export const Store = ({ children }) => {
  const [state, dispatch] = useReducer((rstate, action) => {
    switch (action.type) {
      case 'send_to_slotA':
        return { ...rstate, slotA: action.payload }

      case 'send_to_slotB':
        return { ...rstate, slotB: action.payload }

      case 'set_infoA':
        return { ...rstate, songInfoA: action.payload }

      case 'set_infoB':
        return { ...rstate, songInfoB: action.payload }

      case 'set_recommendation_info':
        return { ...rstate, recommendationInfo: action.payload }

      case 'set_song_uri':
        return { ...rstate, songUri: action.payload }

      default:
        return rstate
    }
  }, initialState)

  return useMemo(() => {
    return (
      <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
    )
  })
}
