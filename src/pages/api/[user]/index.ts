import createHandler from '@/backend/middleware'
import { protect } from '@/backend/middleware/protect'
import { getUserProfile } from '@/backend/controller/userController'

const handler = createHandler()

handler.get(getUserProfile)

export default handler
