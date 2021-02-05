export const pageAnim = {
  pageIn: {
    opacity: 0,
  },
  animatePage: {
    opacity: 1,
    transition: {
      delay: 0.3,
    },
  },
  pageExit: {
    x: '-10vw',
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
}

export const frameX = {
  hidden: { width: 0 },
  visible: {
    width: '1.25rem',
    transition: {
      duration: 0.5,
    },
  },
}
export const frameY = {
  hidden: { height: 0 },
  visible: {
    height: '1.25rem',
    transition: {
      duration: 0.5,
    },
  },
}
