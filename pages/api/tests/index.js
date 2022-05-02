import {
    createTest,
    deleteTest,
    getAllTests,
    getTest,
    updateTest
  } from '../../prisma/tests'
 
  
  export default async function handle (req, res) {
    try {
      switch (req.method) {
        case 'GET': {
          if (req.query.id) {
            const test = await getTest(req.query.id)
            return res.status(200).json(test)
          } else {
            const tests = await getAllTests()
            return res.json(tests)
          }
        }
        case 'POST': {
          const { user, date, email, name, result } = req.body
          const test = await createTest(user, date, email, name, result)
          return res.json(test)
        }
        case 'PUT': {
          const { id, ...updateData } = req.body
          const test = await updateTest(id, updateData)
          return res.json(test)
        }
        case 'DELETE': {
          const { id } = req.body
          const test = await deleteTest(id)
          return res.json(test)
        }
        default:
          break
      }
    } catch (error) {
      return res.status(500).json({ ...error, message: error.message })
    }
  }