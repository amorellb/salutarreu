import prisma from '../lib/prisma'
import { ObjectId } from 'mongodb'

export const getAllUsers = async () => {
  return await prisma.user.findMany()
}

export const getUserById = async id => {
  if (!ObjectId.isValid(id)) {
    return null
  }

  return await prisma.user.findUnique({
    where: { id: id }
  })
}

export const editUserData = async (id, data) => {
  console.log({ ...data })
  if (!ObjectId.isValid(id)) {
    return null
  }

  return await prisma.user.update({
    where: { id: id },
    data: { ...data }
  })
}
