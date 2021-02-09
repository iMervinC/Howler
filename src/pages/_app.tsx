import { AppProps } from 'next/app'
import HowlState from '@/context/HowlState'
import '@/styles/tailwind.css'
import '@/styles/directives.css'
import '@/styles/main.scss'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

// import { motion, AnimatePresence } from 'framer-motion'
// import { pageAnim } from '@/animations/frame'
import Nav from '@/components/Nav/Nav'
import Splash from '@/components/Nav/Splash'

const theme = extendTheme({
  colors: {
    howl: {
      100: '#8C32FF',
    },
  },
})

export default function App({ Component, pageProps, router }: AppProps) {
  //Get Current Page Location
  const navigation = router.route.match(/\w+/)[0]

  return (
    <HowlState>
      <ChakraProvider theme={theme}>
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
