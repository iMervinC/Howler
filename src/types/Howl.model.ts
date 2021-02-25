//Howl State
export interface InitialHowlState {
  nav: howlNav
}

export type howlNav = 'home' | 'profile' | 'user'

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

//MISC TYPES
export interface HowlT {
  _id?: string
  howl: string
  user: {
    name: string
    image: string
    userTag: string
  }
  createdAt?: Date
}

export interface HowlUser {
  _id: string
  name: string
  image: string
  userTag: string
  email: string
}
