import createHandler from '@/backend/middleware'
import { protect } from '@/backend/middleware/protect'
import { getHowlById, deleteHowl } from '@/backend/controller/howlController'

const handler = createHandler()

handler.get(getHowlById)
handler.delete(protect, deleteHowl)

export default handler
