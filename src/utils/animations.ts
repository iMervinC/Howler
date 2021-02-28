export const howlAnim = {
  hidden: { opacity: 0, scale: 0.9, y: -100 },
  visble: { opacity: 1, scale: 1, y: 0, transition: { delay: 0.3 } },
  exit: { opacity: 0, scale: 0.9 },
}

export const howlLoderAnim = {
  visible: {
    x: [0, 10, 0],
    transition: {
      repeat: Infinity,
      duration: 3,
    },
  },
  parent: {
    rotate: [-0.5, 0.5, -0.5],
    transition: { repeat: Infinity, duration: 3 },
  },
}
