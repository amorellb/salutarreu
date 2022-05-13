import { createTest, getAllTests } from '../../../prisma/tests'

export default async function handle(req, res) {
  try {
    switch (req.method) {
      case 'GET': {
        const tests = await getAllTests()
        return res.json(tests)
      }
      case 'POST': {
        const test = await createTest(req.body)
        return res.json(test)
      }
      default:
        break
    }
  } catch (error) {
    return res.status(400).json(null)
  }
}
