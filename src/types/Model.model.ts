import { User } from 'next-auth'
import { Session } from 'next-auth/client'

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

export type sessionUser = () => [
  customUser | undefined,
  Session | null | undefined,
  boolean
]
