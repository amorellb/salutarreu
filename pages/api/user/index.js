import { getAllUsers} from '../../../prisma/user'

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case 'GET': {
        const users = await getAllUsers()
        return res.json(users)
      }
      default:
        break
    }
  } catch (error) {
    return res.status(500).json({ ...error, message: error.message })
  }
}
