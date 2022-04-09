// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import prisma from '../../lib/prisma'

export default async function handler(req, res) {
  const users = await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'jonhdoe@gmail.com'
    }
  })
  res.json(users)
}
