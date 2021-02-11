import React, { FC, useReducer } from 'react'
import HowlCtx from './howl-context'
import howlReducer from './howlReducer'
import { InitialHowlState, HowlReducer, howlNav } from '@/types/Howl.model'

//INITIAL STATE
const initialState: InitialHowlState = {
  nav: 'home',
}

const HowlState: FC = ({ children }) => {
  const [state, dispatch] = useReducer<HowlReducer>(howlReducer, initialState)

  //ACTIONS
  const setNavigation = (nav: howlNav) => {
    dispatch({ type: 'NAVIGATION', payload: nav })
  }

  return (
    <HowlCtx.Provider value={{ state, setNavigation }}>
      {children}
    </HowlCtx.Provider>
  )
}

export default HowlState
