import { Heading, Stack, Text } from '@chakra-ui/react'

export default function CardItem(props) {
  const { brandValue } = props

  return (
    <Stack
      p={'6'}
      margin={'auto'}
      bg="gray.50"
      rounded={'2xl'}
      boxShadow={'lg'}
      boxSize={{ sm: 'sm' }}
      justifyContent={'center'}
    >
      <Text fontSize={100}>{brandValue.icon}</Text>
      <Heading as={'h3'} fontSize={'2xl'}>
        {brandValue.title}
      </Heading>
      <Text fontSize={'1.2rem'} color={'gray.300'} textAlign={'left'}>
        {brandValue.message}
      </Text>
    </Stack>
  )
}
