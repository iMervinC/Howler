import { NextApiRequest, NextApiResponse } from 'next/types'
import User from '@/backend/model/userModel'
import { getSession } from 'next-auth/client'
import { customSession } from '@/types/Model.model'

//
//
//
export const getUserProfile = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const session: customSession = await getSession({ req })
  if (session) {
    const user = await User.findById(session?.user.id)
    res.json(user)
  } else {
    res.status(404)
    throw new Error('User not found')
  }
}
