import { NextApiRequest, NextApiResponse } from 'next/types'
import { getSession } from 'next-auth/client'
import Howl from '@/backend/model/howlModel'
import { customSession } from '@/types/Model.model'

//@desc   Create a new Howl
//@route  POST /api/howl
//@access Private
export const addHowl = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    //Get current session
    const session: customSession = await getSession({ req })
    const howl = req.body

    const newHowl = await Howl.create({
      ...howl,
      user: session?.user.id,
    })

    res.status(201).json({ success: true, data: newHowl })
  } catch (error) {
    res.status(400)
    throw new Error('No howl content')
  }
}

//@desc   Get Howls
//@route  GET /api/howl
//@access Public
export const getHowls = async (req: NextApiRequest, res: NextApiResponse) => {
  const howls = await Howl.find({})
    .populate('user', 'name image userTag')
    .sort({ createdAt: -1 })
  res.json(howls)
}
