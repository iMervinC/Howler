import createHandler from '@/backend/middleware'
import { protect } from '@/backend/middleware/protect'
import { addHowl } from '@/backend/controller/howlController'

const handler = createHandler()

handler.post(protect, addHowl)

export default handler
