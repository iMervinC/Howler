import Head from 'next/head'
import { FC, useEffect } from 'react'
import { useRouter } from 'next/router'
import PageWarp from '@/components/PageWrap'
import LoginPage from '@/components/LoginPage'
import { useSession } from 'next-auth/client'
import Loader from '@/components/UI/Loader'

const Home: FC = () => {
  const [session, loading] = useSession()
  const route = useRouter()

  useEffect(() => {
    session && route.push('/home')
  }, [session])

  if (loading || session) {
    return (
      <>
        <Head>
          <title>Loading...</title>
          <link rel="icon" href="/pic1.svg" />
        </Head>
        <Loader />
      </>
    )
  }

  return (
    <PageWarp title={'Welcome to Howler'} splash>
      <LoginPage />
    </PageWarp>
  )
}

export default Home
