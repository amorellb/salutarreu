import { deleteTest, getTest, updateTest } from '../../../prisma/tests'
export default async function handler(req, res) {
  try {
    switch (req.method) {
      case 'GET': {
        const test = await getTest(req.query.id)
        return res.status(201).status(200).json(test)
      }
      case 'PUT': {
        const test = await updateTest({ testId: req.query.id, ...req.body })
        return res.status(200).json(test)
      }
      case 'DELETE': {
        const test = await deleteTest(req.query.id)
        return res.status(200).json(test)
      }
    }
  } catch (error) {
    return res.status(400).json(null)
  }
}
