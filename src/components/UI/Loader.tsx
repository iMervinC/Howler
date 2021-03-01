import { motion } from 'framer-motion'

const loadingAnim = {
  hidden: {},
  visible: {
    opacity: [1, 1, 0.4, 1, 1],
    scale: [1, 1.1, 1.5, 1, 1],
    rotate: [0, 0, 360, 360, 0],
    borderRadius: ['20%', '20%', '50%', '50%', '20%'],
    transition: {
      duration: 1,
      ease: 'easeInOut',
      times: [0, 0.2, 0.5, 0.8, 1],
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
}

const Loader = () => {
  return (
    <div className="flex items-center justify-center w-main">
      <motion.div
        className="bg-custom h-40 w-40 rounded-md"
        variants={loadingAnim}
        animate="visible"
      >
        <img src="/pic1.svg" alt="Loading svg" className="w-full h-full" />
      </motion.div>
    </div>
  )
}

export default Loader
