import React, { FC, useReducer } from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'
import HowlCtx from './howl-context'
import howlReducer from './howlReducer'
import { InitialHowlState, HowlReducer, howlNav } from '@/types/Howl.model'

//React Query Connection
const queryClient = new QueryClient()

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
    <QueryClientProvider client={queryClient}>
      <HowlCtx.Provider value={{ state, setNavigation }}>
        {children}
      </HowlCtx.Provider>
    </QueryClientProvider>
  )
}

export default HowlState
