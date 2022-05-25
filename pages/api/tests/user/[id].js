import { getTestByUser} from '../../../../prisma/tests'
export default async function handler(req, res) {
  try {
    switch (req.method) {
      case 'GET': {
        const test = await getTestByUser(req.query.userId)
        return res.status(201).status(200).json(test)
      }
     
    }
  } catch (error) {
    return res.status(400).json(null)
  }
}
