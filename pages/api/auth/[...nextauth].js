import nextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import prisma from '../../../lib/prisma'
import bcrypt from 'bcryptjs'

export default nextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    CredentialsProvider({
      id: 'change_email_signin',
      credentials: {},
      async authorize({ email }, req) {
        return {
          email
        }
      }
    }),
    CredentialsProvider({
      credentials: {
        username: {
          label: 'Username',
          type: 'text',
          placeholder: 'Username'
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Password'
        }
      },
      async authorize(credentials, req) {
        const { email, password } = credentials
        console.log('en authorize', { email, password })
        const user = await prisma.user.findUnique({
          where: {
            email
          }
        })
        if (!user) {
          throw new Error('Parece que no existe ningún usuario con ese correo')
        }
        const isValidPassword = await bcrypt.compare(password, user.password)
        if (!isValidPassword) {
          throw new Error('Contraseña incorrecta')
        }
        return user
      }
    })
  ],
  url: process.env.NEXT_AUTH_URL,
  session: {
    jwt: true
  },
  pages: {
    signIn: '/sign-in'
  },
  secret: process.env.SECRET,
  callbacks: {
    async signIn({ user }) {
      return true
    },
    async session({ session }) {
      const { user } = session
      console.log('en session antes de buscar', user)
      const usuarios = await prisma.user.findMany()
      console.log('en session usuarios', usuarios)
      const usuario = await prisma.user.findUnique({
        where: {
          email: user.email
        }
      })
      console.log('en session despues de buscar', usuario)
      session.user = usuario
      return session
    }
  }
})
