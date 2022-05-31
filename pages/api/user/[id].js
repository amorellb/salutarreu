import { getUserById, updateUserData, deleteUser } from '../../../prisma/user'

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case 'GET': {
        const { id } = req.query
        const user = await getUserById(id)
        return user
          ? res.json({ user: user })
          : res.status(201).json({ user: null })
      }
      case 'PUT': {
        const userData = await updateUserData(req.query.id, req.body)
        return res.json(userData)
      }
      case 'DELETE': {
        const { id } = req.query
        const user = await deleteUser(id)
        return user
          ? res.json({ user: user })
          : res.status(201).json({ user: null })
      }
      default:
        break
    }
  } catch (error) {
    return res.status(500).json({ ...error, message: error.message })
  }
}
