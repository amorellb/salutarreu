import { getUserById } from '../../../prisma/user'

export default async function handler(req, res) {
  try {
    const { id } = req.query
    const user = await getUserById(id)
    return user
      ? res.json({ user: user })
      : res.status(201).json({ user: null })
  } catch (error) {
    return res.status(500).json({ ...error, message: error.message })
  }
}