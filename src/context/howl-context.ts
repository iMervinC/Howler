import { HowlContext } from '@/types/Howl.model'
import { createContext } from 'react'

const HowlCtx = createContext<HowlContext>({} as HowlContext)

export default HowlCtx
