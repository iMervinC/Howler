import { NextApiRequest, NextApiResponse } from 'next/types'
import dbConnect from '@/utils/dbConnect'

const dbMiddleware = async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: any
) => {
  try {
    // @ts-ignore
    if (!global.mongoose) {
      // @ts-ignore
      global.mongoose = dbConnect()
    }
  } catch (err) {
    console.error(err)
  }
  return next()
}

export default dbMiddleware
