import { HowlReducer, InitialHowlState } from '@/types/Howl.model'

//Ref for useReducer TS (https://www.sumologic.com/blog/react-hook-typescript)
const howlReducer: HowlReducer = (state, action): InitialHowlState => {
  switch (action.type) {
    //Navigation State
    case 'NAVIGATION':
      return { ...state, nav: action.payload }
    default:
      return state
  }
}

export default howlReducer
