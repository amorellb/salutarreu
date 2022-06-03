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
  if (data.email) {
    const emailExists = await prisma.user.findUnique({
      where: {
        email: data.email
      }
    })
    if (emailExists && emailExists.email !== data.email) {
      return { error: 'Parece que el correo ya está en uso' }
    }
  }

  if (data.DNI) {
    const userDNIExists = await prisma.user.findUnique({
      where: { DNI: data.DNI }
    })
    if (userDNIExists && userDNIExists.DNI !== data.DNI) {
      return { error: 'Parece que ya hay una cuenta con ese DNI' }
    }
  }
  if (data.phone) {
    const phoneExists = await prisma.user.findUnique({
      where: { phone: data.phone }
    })

    if (phoneExists && phoneExists.phone !== data.phone) {
      return { error: 'Parece que ya hay una cuenta con ese teléfono' }
    }
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
