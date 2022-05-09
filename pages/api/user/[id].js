import { getUserById, editUserData } from '../../../prisma/user'

export default async function handler(req, res) {
  console.log(req.method)
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
        console.log(req.query)
        const userData = editUserData(req.query.id, req.body)
        return res.json(userData)
      }
      default:
        break
    }
  } catch (error) {
    return res.status(500).json({ ...error, message: error.message })
  }
}
