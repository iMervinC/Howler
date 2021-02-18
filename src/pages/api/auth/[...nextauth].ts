import NextAuth, { InitOptions } from 'next-auth'
import Providers from 'next-auth/providers'
import { NextApiRequest, NextApiResponse } from 'next/types'
import User from '@/backend/model/userModel'
import dbConnect from '@/utils/dbConnect'
import { customUser } from '@/types/Model.model'

const options: InitOptions = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  database: process.env.MONGODB_URI,
  session: {
    jwt: true,
  },
  callbacks: {
    async session(session, user: customUser) {
      const sessionUser: customUser = {
        ...session.user,
        userTag: user.userTag,
        id: user.id,
      }
      return Promise.resolve({ ...session, user: sessionUser })
    },
    async jwt(token, user: customUser, profile) {
      let response = token

      if (user?.id) {
        //Connect to DataBase
        dbConnect()
        //Get User
        let dbUser = await User.findById(user.id)
        //Add UserTag if it doesn't already exist
        if (!dbUser.userTag && profile.login) {
          dbUser.userTag = profile.login
          await dbUser.save()
          console.log('No tag')
        }

        response = {
          ...token,
          id: user.id,
          userTag: dbUser.userTag,
        }
      }

      return Promise.resolve(response)
    },
  },
}

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options)
