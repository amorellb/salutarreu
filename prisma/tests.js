
import prisma from '../lib/prisma'

// READ
export const getAllTests = async () => {
  const tests = await prisma.test.findMany({})
  return tests
}

export const getTest = async id => {
  const test = await prisma.test.findUnique({
    where: { id }
  })
  return test
}

// CREATE
export const createTest = async (date, name, result) => {
  const test = await prisma.test.create({
    data: {
      date: date,
      name: name,
      result: result,
      type: 'MOBILITY'
    }
  })
  return test
}

// UPDATE
export const updateTest = async (id, updateData) => {
  const test = await prisma.test.update({
    where: {
      id
    },
    data: {
      ...updateData
    }
  })
  return test
}

// DELETE
export const deleteTest = async id => {
  const test = await prisma.test.delete({
    where: {
      id
    }
  })
  return test
}