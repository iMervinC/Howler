import { AppProps } from 'next/app'
import { Provider } from 'next-auth/client'
import { ChakraProvider } from '@chakra-ui/react'
import HowlState from '@/context/HowlState'
import '@/styles/tailwind.css'
import '@/styles/directives.css'
import '@/styles/main.css'
import Nav from '@/components/Nav/Nav'

export default function App({ Component, pageProps, router }: AppProps) {
  //Get Current Page Location
  const navigation = router.route.match(/\w+/)
  const session = pageProps.session

  return (
    <Provider session={session}>
      <HowlState>
        <ChakraProvider>
          <main className="container mx-auto flex justify-center h-screen">
            <Nav navigation={navigation} />
            <Component {...pageProps} />
            <div className="w-side hidden lg:block"></div>
          </main>
        </ChakraProvider>
      </HowlState>
    </Provider>
  )
}
