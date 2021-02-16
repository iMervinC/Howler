import { User } from 'next-auth'

export interface customUser extends User {
  id?: string
  userTag?: string
}
export interface session {
  user: customUser
  accessToken?: string
  expires: string
}

export type customSession = session | null
