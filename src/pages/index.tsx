import { FC, useEffect } from 'react'
import { useRouter } from 'next/router'
import PageWarp from '@/components/PageWrap'
import LoginPage from '@/components/LoginPage'
import { useSession } from 'next-auth/client'

const Home: FC = () => {
  const [seassion] = useSession()
  const route = useRouter()

  useEffect(() => {
    seassion && route.push('/home')
  }, [seassion])

  return (
    <PageWarp title={'Welcome to Howler'} splash>
      <LoginPage />
    </PageWarp>
  )
}

export default Home
