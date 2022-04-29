import { getProviders } from 'next-auth/react'
import { Container } from '@chakra-ui/react'

export default function SignIn({ providers }) {
  return (
    <Container>
      {/* <SignInStyles>
        {Object.values(providers).map(provider => (
          <button onClick={() => signIn(provider.id)} key={provider.name}>
            Sign in with {provider.name}
          </button>
        ))}
      </SignInStyles> */}
    </Container>
  )
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers }
  }
}
