import createHandler from '@/backend/middleware'
import { protect } from '@/backend/middleware/protect'
import { addHowl, getHowls } from '@/backend/controller/howlController'

const handler = createHandler()

handler.get(getHowls)
handler.post(protect, addHowl)

export default handler
