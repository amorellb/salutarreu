import prisma from '../lib/prisma'
import { ObjectId } from 'mongodb'
export const getAllUsers = async () => {
  return await prisma.user.findMany({
    orderBy: [
      { name: 'asc' }
    ]
  })
}

export const getUserById = async id => {
  if (!ObjectId.isValid(id)) {
    return null
  }

  return await prisma.user.findUnique({
    where: { id: id }
  })
}
