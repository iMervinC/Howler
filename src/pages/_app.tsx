import { AppProps } from 'next/app'
import '@/styles/tailwind.css'
import '@/styles/directives.css'
import '@/styles/main.scss'

// import { motion, AnimatePresence } from 'framer-motion'
// import { pageAnim } from '@/animations/frame'
import Nav from '@/components/Nav/Nav'

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  )
}
