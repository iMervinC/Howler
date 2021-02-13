import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import Adapters from 'next-auth/adapters'
import Models from '@/model'
import { NextApiRequest, NextApiResponse } from 'next/types'

const options = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  database: process.env.MONGODB_URI,
  adapter: Adapters.TypeORM.Adapter(
    { type: 'mongodb', url: process.env.MONGODB_URI },
    {
      models: {
        User: Models.User,
      },
    }
  ),
}

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options)
