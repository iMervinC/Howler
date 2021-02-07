import { AppProps } from 'next/app'
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
  return (
    <ChakraProvider theme={theme}>
      {/* <Splash /> */}
      <main className="container mx-auto flex justify-center h-screen">
        <Nav />
        <Component {...pageProps} />
        <div className="w-side hidden md:block"></div>
      </main>
    </ChakraProvider>
  )
}
