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

    //Create howl in the DB with user as Ref
    const newHowl = await Howl.create({
      ...howl,
      user: session?.user.id,
    })

    //Howl Response With the session user
    const howlResponse = { ...newHowl._doc, user: session?.user }
    res.status(201).json(howlResponse)
  } catch (error) {
    res.status(404)
    throw new Error('No howl content')
  }
}

//@desc   Get Howls
//@route  GET /api/howl
//@access Public
export const getHowls = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const howls = await Howl.find({})
      .populate('user', 'name image userTag')
      .sort({ createdAt: -1 })
    return res.status(200).json(howls)
  } catch (error) {
    res.status(404)
    throw new Error('Error! No howls found')
  }
}

//@desc   Get Howl by ID
//@route  GET /api/howl/:id
//@access Private
export const getHowlById = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const {
    query: { id },
  } = req

  try {
    const howlById = await Howl.findById(id)
    if (!howlById) {
      return res.status(400).json({ success: false })
    }
    res.status(200).json(howlById)
  } catch (error) {
    res.status(400).json({ success: false })
  }
}

//@desc   Delete Howl by ID
//@route  DELETE /api/howl/:id
//@access Private
export const deleteHowl = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { id },
  } = req

  try {
    const deletedHowl = await Howl.deleteOne({ _id: id })
    if (!deletedHowl) {
      return res.status(400).json({ success: false })
    }
    res.status(200).json({ success: true, data: {} })
  } catch (error) {
    res.status(400).json({ success: false })
  }
}

//@desc   Update Howl by ID
//@route  PATCH /api/howl/:id
//@access Private
