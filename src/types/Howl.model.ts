//Howl State
export interface InitialHowlState {
  nav: howlNav
}

export type howlNav = 'home' | 'profile'

//Howl Actions
export interface HowlActions {
  type: 'NAVIGATION'
  payload?: any
}

//Howl Reducer
export type HowlReducer = (state: InitialHowlState, action: HowlActions) => any

//Howl Context
export interface HowlContext {
  state: InitialHowlState
  setNavigation: (nav: howlNav) => void
}
