import { FC } from 'react'
import PageWarp from '@/components/PageWarp'
import LoginPage from '@/components/LoginPage'

const Home: FC = () => {
  return (
    <PageWarp title={'Welcome to Howler'}>
      <LoginPage />
    </PageWarp>
  )
}

export default Home
