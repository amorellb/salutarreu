import { Image } from '@chakra-ui/react'

export default function Logo(props) {
  const { imageFile, width } = props

  return <Image width={width} src={imageFile} alt="Corporative logo image" />
}
