import createHandler from '@/backend/middleware'
import { protect } from '@/backend/middleware/protect'
import {
  getHowlById,
  deleteHowl,
  updateHowl,
} from '@/backend/controller/howlController'

const handler = createHandler()

handler.get(getHowlById)
handler.patch(protect, updateHowl)
handler.delete(protect, deleteHowl)

export default handler
