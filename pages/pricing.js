import {
    Box,
    Stack,
    HStack,
    Heading,
    Text,
    VStack,
    useColorModeValue,
} from '@chakra-ui/react';


function PriceWrapper(props) {
    return (
        <Box
            width={{ sm: '350px', md: '280px', lg: '300px' }}
            shadow="md"
            borderWidth="1px"
            borderRadius={'xl'}
            borderColor={useColorModeValue('brand.300', 'brand.600')}>
            {props.children}
        </Box>
    );
}

export default function ThreeTierPricing() {
    return (
        <Box py={'8rem'}>

            <VStack spacing={2} textAlign="center" py={12}>
                <Heading
                    pe={'15px'}
                    as='i'
                    lineHeight={1.1}
                    fontSize={{ base: '5xl', lg: '6xl' }}
                    bgGradient='linear(to-r,brand.600, brand.500, brand.400, brand.300)'
                    bgClip='text'>
                    Abonos mensuales 2022
                </Heading>
                <Text fontSize="xl" color={'gray.500'}>
                    Elige el plan que más se adapte a ti.
                </Text>
            </VStack>

            <Stack spacing={8} mb="55px">
                <Box>
                    <Box px={12}>
                        <Heading as="h2" fontWeight="500" fontSize="4xl" color={'brand.600'}>
                            Sesiones individuales
                        </Heading>
                    </Box>
                    <VStack px={10}>
                        <Stack
                            direction={{ base: 'column', lg: 'row' }}
                            textAlign="center"
                            justify="center"
                            spacing={{ base: 4, lg: 10 }}
                            p={10}>

                            <PriceWrapper>
                                <Box py={4} px={12}>
                                    <Text fontWeight="500" fontSize="2xl">
                                        1 entreno a la semana
                                    </Text>
                                    <HStack justifyContent="center">
                                        <Text fontSize="3xl" fontWeight="600">
                                            €
                                        </Text>
                                        <Text fontSize="5xl" fontWeight="900">
                                            100
                                        </Text>
                                        <Text fontSize="3xl" color="gray.500">
                                            /mes
                                        </Text>
                                    </HStack>
                                </Box>
                            </PriceWrapper>

                            <PriceWrapper>
                                <Box py={4} px={12}>
                                    <Text fontWeight="500" fontSize="2xl">
                                        2 entrenos a la semana
                                    </Text>
                                    <HStack justifyContent="center">
                                        <Text fontSize="3xl" fontWeight="600">
                                            €
                                        </Text>
                                        <Text fontSize="5xl" fontWeight="900">
                                            195
                                        </Text>
                                        <Text fontSize="3xl" color="gray.500">
                                            /mes
                                        </Text>
                                    </HStack>
                                </Box>

                            </PriceWrapper>

                            <PriceWrapper>
                                <Box py={4} px={12}>
                                    <Text fontWeight="500" fontSize="2xl">
                                        3 entrenos a la semana
                                    </Text>
                                    <HStack justifyContent="center">
                                        <Text fontSize="3xl" fontWeight="600">
                                            €
                                        </Text>
                                        <Text fontSize="5xl" fontWeight="900">
                                            280
                                        </Text>
                                        <Text fontSize="3xl" color="gray.500">
                                            /mes
                                        </Text>
                                    </HStack>
                                </Box>
                            </PriceWrapper>
                        </Stack>
                    </VStack>
                </Box>
            </Stack>

            <Stack spacing={8} mb="55px">
                <Box>
                    <Box px={12}>
                        <Heading as="h2" fontWeight="500" fontSize="4xl" color={'brand.600'}>
                            Sesiones en pareja
                        </Heading>
                    </Box>
                    <VStack px={10}>
                        <Stack
                            direction={{ base: 'column', lg: 'row' }}
                            textAlign="center"
                            justify="center"
                            spacing={{ base: 4, lg: 10 }}
                            p={10}>

                            <PriceWrapper>
                                <Box py={4} px={12}>
                                    <Text fontWeight="500" fontSize="2xl">
                                        1 entreno a la semana
                                    </Text>
                                    <HStack justifyContent="center">
                                        <Text fontSize="3xl" fontWeight="600">
                                            €
                                        </Text>
                                        <Text fontSize="5xl" fontWeight="900">
                                            55
                                        </Text>
                                        <Text fontSize="3xl" color="gray.500">
                                            /persona
                                        </Text>
                                    </HStack>
                                    <Text fontSize="xl" color="brand.500">
                                        Total: 110 €
                                    </Text>
                                </Box>

                            </PriceWrapper>

                            <PriceWrapper>
                                <Box py={4} px={12}>
                                    <Text fontWeight="500" fontSize="2xl">
                                        2 entrenos a la semana
                                    </Text>
                                    <HStack justifyContent="center">
                                        <Text fontSize="3xl" fontWeight="600">
                                            €
                                        </Text>
                                        <Text fontSize="5xl" fontWeight="900">
                                            105
                                        </Text>
                                        <Text fontSize="3xl" color="gray.500">
                                            /persona
                                        </Text>
                                    </HStack>
                                    <Text fontSize="xl" color="brand.500">
                                        Total: 210 €
                                    </Text>
                                </Box>

                            </PriceWrapper>

                            <PriceWrapper>
                                <Box py={4} px={12}>
                                    <Text fontWeight="500" fontSize="2xl">
                                        3 entrenos a la semana
                                    </Text>
                                    <HStack justifyContent="center">
                                        <Text fontSize="3xl" fontWeight="600">
                                            €
                                        </Text>
                                        <Text fontSize="5xl" fontWeight="900">
                                            150
                                        </Text>
                                        <Text fontSize="3xl" color="gray.500">
                                            /persona
                                        </Text>
                                    </HStack>
                                    <Text fontSize="xl" color="brand.500">
                                        Total: 300 €
                                    </Text>
                                </Box>
                            </PriceWrapper>
                        </Stack>
                    </VStack>
                </Box>
            </Stack>

            <Stack spacing={8} mb="55px">
                <Box>
                    <Box px={12}>
                        <Heading as="h2" fontWeight="500" fontSize="4xl" color={'brand.600'}>
                            Sesiones 3+
                        </Heading>
                    </Box>
                    <VStack px={10}>
                        <Stack
                            direction={{ base: 'column', lg: 'row' }}
                            textAlign="center"
                            justify="center"
                            spacing={{ base: 4, lg: 10 }}
                            p={10}>

                            <PriceWrapper>
                                <Box py={4} px={12}>
                                    <Text fontWeight="500" fontSize="2xl">
                                        1 entreno a la semana
                                    </Text>
                                    <HStack justifyContent="center">
                                        <Text fontSize="3xl" fontWeight="600">
                                            €
                                        </Text>
                                        <Text fontSize="5xl" fontWeight="900">
                                            40
                                        </Text>
                                        <Text fontSize="3xl" color="gray.500">
                                            /persona
                                        </Text>
                                    </HStack>
                                    <Text fontSize="xl" color="brand.500">
                                        Total: 120 €
                                    </Text>
                                </Box>

                            </PriceWrapper>

                            <PriceWrapper>
                                <Box py={4} px={12}>
                                    <Text fontWeight="500" fontSize="2xl">
                                        2 entrenos a la semana
                                    </Text>
                                    <HStack justifyContent="center">
                                        <Text fontSize="3xl" fontWeight="600">
                                            €
                                        </Text>
                                        <Text fontSize="5xl" fontWeight="900">
                                            78
                                        </Text>
                                        <Text fontSize="3xl" color="gray.500">
                                            /persona
                                        </Text>
                                    </HStack>
                                    <Text fontSize="xl" color="brand.500">
                                        Total: 234 €
                                    </Text>
                                </Box>

                            </PriceWrapper>

                            <PriceWrapper>
                                <Box py={4} px={12}>
                                    <Text fontWeight="500" fontSize="2xl">
                                        3 entrenos a la semana
                                    </Text>
                                    <HStack justifyContent="center">
                                        <Text fontSize="3xl" fontWeight="600">
                                            €
                                        </Text>
                                        <Text fontSize="5xl" fontWeight="900">
                                            110
                                        </Text>
                                        <Text fontSize="3xl" color="gray.500">
                                            /persona
                                        </Text>
                                    </HStack>
                                    <Text fontSize="xl" color="brand.500">
                                        Total: 330 €
                                    </Text>
                                </Box>
                            </PriceWrapper>
                        </Stack>
                    </VStack>
                </Box>
            </Stack>

            <Stack spacing={8} mb="55px">
                <Box>
                    <Box px={12}>
                        <Heading as="h2" fontWeight="500" fontSize="4xl" color={'brand.600'}>
                            Abono por sesiones
                        </Heading>
                    </Box>
                    <VStack px={10}>
                        <Stack
                            direction={{ base: 'column', lg: 'row' }}
                            textAlign="center"
                            justify="center"
                            spacing={{ base: 4, lg: 10 }}
                            p={10}>

                            <PriceWrapper>
                                <Box py={4} px={12}>

                                    <HStack justifyContent="center">
                                        <Text fontSize="3xl" fontWeight="600">
                                            €
                                        </Text>
                                        <Text fontSize="5xl" fontWeight="900">
                                            290
                                        </Text>
                                        <Text fontSize="3xl" color="gray.500">
                                            /10 sesiones
                                        </Text>
                                    </HStack>
                                </Box>
                            </PriceWrapper>
                        </Stack>
                    </VStack>
                </Box>
            </Stack>

            <Text fontWeight="200" fontSize="sm" mx="55px">
                *Los abonos mensuales aseguran un mínimo de 4/8/12 sesiones en función de la modalidad
                1/2/3 por semana respectivamente. En caso de que el entrenamiento no se pueda llevar a cabo dentro
                el horario habitual, siempre se buscará una alternativa para conseguir las citas propuestas
                inicialmente.
            </Text>
            <Text fontWeight="200" fontSize="sm" mx="55px">
                *El precio por persona será fijo a partir de 3 personas, indistintamente del número total de personas.
            </Text>
            <Text fontWeight="200" fontSize="sm" mx="55px">
                *Las sesiones podrán ser compartidas en formato dual con otros usuarios que también
                hagan uso de esta modalidad, restando la parte proporcional (1/2 sesión) a
                cada una de las partes.
            </Text>

        </Box>
    );
}