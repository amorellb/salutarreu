import bcrypt from 'bcryptjs'
import prisma from '../../lib/prisma'
export default async function handler(req, res) {
  const { email, password, DNI, phone } = req.body
  const userEmailExists = await prisma.user.findUnique({
    where: {
      email
    }
  })
  if (userEmailExists) {
    res
      .status(200)
      .json({ error: 'Parece que ya hay una cuenta con ese correo' })
  }

  const userDNIExists = await prisma.user.findUnique({
    where: {
      DNI
    }
  })
  if (userDNIExists) {
    res.status(200).json({ error: 'Parece que ya hay una cuenta con ese DNI' })
  }

  const phoneExists = await prisma.user.findUnique({
    where: {
      phone
    } 
  })
  if (phoneExists) {
    res
      .status(200)
      .json({ error: 'Parece que ya hay una cuenta con ese teléfono' })
  }

  const hashPassword = await bcrypt.hash(password, 10)
  const nuevousuario = await prisma.user.create({
    data: {
      ...req.body,
      password: hashPassword,
      birthDate: new Date(req.body.birthDate),
      zipCode: Number(req.body.zipCode)
    }
  })
  res.status(200).json({ user: nuevousuario })
}
