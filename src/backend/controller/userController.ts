import { NextApiRequest, NextApiResponse } from 'next/types'
import User from '@/backend/model/userModel'
import Howl from '@/backend/model/howlModel'

//@desc   get User Profile
//@route  GET /api/:user
//@access Public
export const getUserProfile = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { user: userTag } = req.query
  try {
    const user = await User.findOne({ userTag })
    res.json(user)
  } catch (error) {
    res.status(404)
    throw new Error('User not found')
  }
}

//@desc   Get User howls
//@route  GET /api/:user/howls
//@access PUBLIC
export const getUserHowls = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { user } = req.query

  try {
    const howls = await Howl.find({ user })
      .populate('user', 'name image userTag')
      .sort({ createdAt: -1 })

    res.status(200).json(howls)
  } catch (error) {
    res.status(404)
    throw new Error('No User with howls found!')
  }
}
