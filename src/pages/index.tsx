import { FC } from 'react'
import { Router } from 'next/router'
import PageWarp from '@/components/PageWarp'
import LoginPage from '@/components/LoginPage'
import { useSession } from 'next-auth/client'

const Home: FC = () => {
  const [seassion] = useSession()

  // useEffect(() => {

  // }, [seassion]);

  return (
    <PageWarp title={'Welcome to Howler'}>
      <LoginPage />
    </PageWarp>
  )
}

export default Home
