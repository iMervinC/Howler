import { HowlContext } from '@/types/Howl.model'
import { createContext } from 'react'

const HowlCtx = createContext<Partial<HowlContext>>(null)

export default HowlCtx
