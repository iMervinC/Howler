import { AppProps } from 'next/app'
import HowlState from '@/context/HowlState'
import '@/styles/tailwind.css'
import '@/styles/directives.css'
import '@/styles/main.scss'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import Nav from '@/components/Nav/Nav'
import Splash from '@/components/Nav/Splash'

// import { motion, AnimatePresence } from 'framer-motion'
// import { pageAnim } from '@/animations/frame'

export default function App({ Component, pageProps, router }: AppProps) {
  //Get Current Page Location
  const navigation = router.route.match(/\w+/)

  return (
    <HowlState>
      <ChakraProvider>
        {/* <Splash /> */}
        <main className="container mx-auto flex justify-center h-screen">
          <Nav navigation={navigation} />
          <Component {...pageProps} />
          <div className="w-side hidden lg:block"></div>
        </main>
      </ChakraProvider>
    </HowlState>
  )
}
