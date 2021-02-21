import { NextApiRequest, NextApiResponse } from 'next/types'
import dbConnect from '@/utils/dbConnect'

const dbMiddleware = async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: any
) => {
  try {
    await dbConnect()
  } catch (err) {
    console.error(err)
    throw new Error('Failed to connect to DataBase')
  }
  return next()
}

export default dbMiddleware
