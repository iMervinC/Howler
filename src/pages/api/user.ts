import createHandler from '@/middleware'
import { protect } from '@/middleware/protect'
import { getUserProfile } from '@/controller/userController'

const handler = createHandler()

handler.get(protect, getUserProfile)

export default handler
