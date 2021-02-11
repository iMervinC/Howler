//Howl State
export interface InitialHowlState {
  nav: howlNav
}

type howlNav = 'home' | 'profile'

//Howl Actions
export type HowlActions = {
  type: 'NAVIGATION'
  payload: howlNav
}

//Howl Reducer
export type HowlReducer = (state: InitialHowlState, action: HowlActions) => any

//Howl Context
export interface HowlContext {
  state: InitialHowlState
  setNavigation: (nav: howlNav) => void
}
