import { motion } from 'framer-motion'
import { howlLoderAnim } from '@/utils/animations'

const Howl = () => {
  return (
    <motion.div
      variants={howlLoderAnim}
      animate="parent"
      className="h-auto bg-custom w-11/12 p-4 rounded-md shadow-lg"
    >
      <motion.div
        variants={howlLoderAnim}
        animate="visible"
        className="flex items-center gap-2 font-semibold"
      >
        <img src="/pic2.svg" alt="User" />
        <div className="flex flex-col">
          <div className="howl-loader__line w-40" />
          <div className="howl-loader__line w-20 mt-2" />
        </div>
      </motion.div>
      <div className="mt-4 mx-10 py-2 border-solid border-t border-white flex flex-col gap-2">
        <motion.div
          variants={howlLoderAnim}
          animate="visible"
          className="howl-loader__line w-full "
        />
        <motion.div
          variants={howlLoderAnim}
          animate="visible"
          className="howl-loader__line w-full "
        />
        <motion.div
          variants={howlLoderAnim}
          animate="visible"
          className="howl-loader__line w-2/3 "
        />
      </div>
    </motion.div>
  )
}

export default Howl
