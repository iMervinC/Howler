import { HowlT } from './Howl.model'

export interface TxtHowl {
  value: string
  textlimit: number
  rows: number
  minRows: number
  maxRows: number
}

export interface HowlUI {
  modal?: boolean
  onClose?: () => void
  howlT?: HowlT
}
