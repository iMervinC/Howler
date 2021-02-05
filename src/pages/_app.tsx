import { AppProps } from 'next/app'
import '@/styles/tailwind.css'
import '@/styles/directives.css'
import '@/styles/main.scss'
import Nav from '@/components/Nav/Nav'
import Frame from '@/components/Frame'
import { motion, AnimatePresence } from 'framer-motion'
import { pageAnim } from '@/animations/frame'

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Frame />
      <Nav />
      <AnimatePresence>
        <motion.div
          key={router.route}
          initial="pageIn"
          animate="animatePage"
          exit="pageExit"
          variants={pageAnim}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  )
}
