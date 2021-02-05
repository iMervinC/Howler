import React, { FC } from 'react'
import { motion } from 'framer-motion'
import { wave, wave2 } from '@/animations/wave'

interface GlobeType {
  zIndex?: string
  fill1?: string
  fill2?: string
}

const Globe: FC<GlobeType> = ({ zIndex, fill1, fill2, children }) => {
  return (
    <div
      className={`${zIndex} relative bg-custom-offwhite rounded-full overflow-hidden border-solid border-8 border-custom w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex`}
      style={{ borderColor: fill2 }}
    >
      <svg
        className="absolute z-0 w-full bottom-0"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          variants={wave2}
          initial="hidden"
          animate="visible"
          className="transform -translate-x-full"
          d="M250 55.2152C150 -44.7848 41.6667 13.5485 0 55.2152V606H1000V55.2152C958.333 96.8818 850 155.215 750 55.2152C650 -44.7848 541.667 13.5485 500 55.2152C458.333 96.8818 350 155.215 250 55.2152Z"
          fill={fill1 || '#00C5D1'}
        />
        <motion.path
          variants={wave}
          initial="hidden"
          animate="visible"
          d="M750 55.1763C850 -44.7533 958.333 13.539 1000 55.1763V606H0V55.1763C41.6667 96.8135 150 155.106 250 55.1763C350 -44.7532 458.333 13.539 500 55.1763C541.667 96.8136 650 155.106 750 55.1763Z"
          fill={fill2 || '#3EF3FF'}
        />
      </svg>
      {children}
    </div>
  )
}

export default Globe
