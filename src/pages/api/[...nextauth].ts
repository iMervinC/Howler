import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { NextApiRequest, NextApiResponse } from 'next/types'

const options = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  database: process.env.MONGODB_URI,
}

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options)
