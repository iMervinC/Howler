import { useSession } from 'next-auth/client'
import { customUser, sessionUser } from '@/types/Model.model'

const useSessionUser: sessionUser = () => {
  const [session, loading] = useSession()
  const sessionUser: customUser = {
    ...session?.user,
  }

  return [sessionUser, session, loading]
}

export { useSessionUser }
