import { NextApiRequest, NextApiResponse } from 'next/types'
import { getSession } from 'next-auth/client'
import { customSession } from '@/types/Model.model'
import Howl from '@/backend/model/userModel'

// POST /api/howl
export const addHowl = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const session: customSession = await getSession({ req })
    const { howl } = req.body

    const newHowl = new Howl({
      howl,
      user: session?.user.id,
    })

    await newHowl.save()
    res.send(newHowl)
  } catch (error) {
    res.status(400)
    throw new Error('No howl content')
  }
}
