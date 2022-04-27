import nextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import prisma from '../../../lib/prisma'

export default nextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  secret: process.env.SECRET,
  callbacks: {
    async signIn({ user }) {
      const { name, email, image } = user

      const usuario = await prisma.user.findUnique({
        where: { email: email }
      })

      if (!usuario) {
        await prisma.user.create({
          data: {
            name: name,
            email: email,
            avatar: image
          }
        })
      }
      return true
    },
    async session({ session }) {
      const usuario = await prisma.user.findUnique({
        where: { email: session?.user.email }
      })
      session.user = usuario
      return session
    }
  }
})
