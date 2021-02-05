import React from 'react'
import { motion } from 'framer-motion'
import { frameX, frameY } from '@/animations/frame'
import useWindowSize from '@/hooks/useWindowSize'

const Frame = () => {
  const size = useWindowSize()

  return (
    <>
      {size.width >= 768 && (
        <>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={frameX}
            className="frame-v left-0 bg-custom-offwhite"
          ></motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={frameX}
            className="frame-v right-0 bg-custom-offwhite"
          ></motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={frameY}
            className="frame-h top-0 bg-custom-offwhite"
          ></motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={frameY}
            className="frame-h bottom-0 bg-custom-offwhite"
          ></motion.div>
        </>
      )}
    </>
  )
}

export default Frame
