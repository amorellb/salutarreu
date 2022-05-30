import prisma from '../lib/prisma'
import { ObjectId } from 'mongodb'

export const getAllUsers = async () => {
  return await prisma.user.findMany({
    orderBy: [{ name: 'asc' }]
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

export const updateUserData = async (id, data) => {
  if (!ObjectId.isValid(id)) {
    return null
  }

  return await prisma.user.update({
    where: { id: id },
    data: { ...data }
  })
}

export const deleteUser = async id => {
  if (!ObjectId.isValid(id)) {
    return null
  }
  return await prisma.user.delete({
    where: { id: id }
  })
}
