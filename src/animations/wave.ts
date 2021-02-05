export const wave = {
  hidden: { y: 400, opacity: 0 },
  visible: {
    opacity: 1,
    y: 180,
    x: ['0%', '-100%'],
    transition: {
      type: 'spring',
      duration: 2,
      delay: 0.2,
      x: { repeat: Infinity, duration: 2 },
    },
  },
}
export const wave2 = {
  hidden: { y: 400, opacity: 0 },
  visible: {
    opacity: 1,
    y: 160,
    x: ['-100%', '0%'],
    transition: {
      type: 'spring',
      duration: 2,
      delay: 0.2,
      x: { repeat: Infinity, duration: 2 },
    },
  },
}
