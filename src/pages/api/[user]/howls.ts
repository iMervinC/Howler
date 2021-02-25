import createHandler from '@/backend/middleware'
import { protect } from '@/backend/middleware/protect'
import { getUserHowls } from '@/backend/controller/userController'

const handler = createHandler()

handler.get(getUserHowls)

export default handler
