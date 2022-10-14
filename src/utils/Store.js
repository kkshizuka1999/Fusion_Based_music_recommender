import React, { createContext, useReducer } from 'react';

const initialState = {
  slotA: {},
  slotB: {},
  songInfoA: {},
  songInfoB: {},
  recommendationInfo: {},
  songUri: "",
};

export const Context = createContext(initialState);

export const Store = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {

      case 'send_to_slotA':
        return { ...state, slotA: action.payload }

      case 'send_to_slotB':
        return { ...state, slotB: action.payload }

      case 'set_infoA':
        return { ...state, songInfoA: action.payload }

      case 'set_infoB':
        return { ...state, songInfoB: action.payload }

      case 'set_recommendation_info':
        return { ...state, recommendationInfo: action.payload }

      case 'set_song_uri':
        return { ...state, songUri: action.payload }

      default:
        return state
    }
  }, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  )
}