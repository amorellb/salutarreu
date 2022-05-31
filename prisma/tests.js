import { ObjectId } from 'mongodb'
import prisma from '../lib/prisma'

// READ
export const getAllTests = async () => {
  return await prisma.test.findMany()
}

export const getTest = async id => {
  if (!ObjectId.isValid(id)) {
    return null
  }
  return await prisma.test.findUnique({
    where: { id }
  })
}

export const getTestByUser = async id => {

  if (!ObjectId.isValid(id)) {
    return null
  }
  return await prisma.test.findMany({
    orderBy: [
      { date: 'asc' },
    ],
    where: { userId: id }
  })
}

// CREATE
export const createTest = async ({ userId, date, name, result, type }) => {
  if (!ObjectId.isValid(userId)) {
    return null
  }
  const test = await prisma.test.create({
    data: {
      userId,
      date,
      name,
      result,
      type
    }
  })
  return test
}

// UPDATE
export const updateTest = async ({ testId, date, name, result, type }) => {
  if (!ObjectId.isValid(testId)) {
    return null
  }
  return await prisma.test.update({
    where: { id: testId },
    data: { date, name, result, type }
  })
}

// DELETE
export const deleteTest = async id => {
  if (!ObjectId.isValid(id)) {
    return null
  }
  return await prisma.test.delete({
    where: {
      id
    }
  })
}
