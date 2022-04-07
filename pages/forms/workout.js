import {
    Box,
    Flex,
    Stack,
    Heading,
    Text,
    Container,
    Input,
    Button,
    SimpleGrid,
    Avatar,
    AvatarGroup,
    useBreakpointValue,
    FormLabel,
    FormControl,
    Checkbox,
    CheckboxGroup,
} from '@chakra-ui/react';

const avatars = [
    {
        name: 'Antonio Morell',
        url: 'https://avatars.githubusercontent.com/u/74008183?v=4',
    },
    {
        name: 'Magi Payeras',
        url: 'https://media.discordapp.net/attachments/770716465941970955/957441418585067570/desconocido.jpeg?width=301&height=669',
    },
    {
        name: 'Kevin Puchaicela',
        url: 'https://avatars.githubusercontent.com/u/47866787?v=4',
    },
    {
        name: 'Victoria Pelaez',
        url: 'https://avatars.githubusercontent.com/u/73317705?s=400&u=636c6e048ef6e1936413e9fe5d5ebe7a7c23bbf1&v=4',
    }
];

function WorkoutForm() {
    return (
        <Box position={'relative'}>
            <Container
                as={SimpleGrid}
                maxW={'7xl'}
                columns={{ base: 1, md: 2 }}
                spacing={{ base: 10, lg: 32 }}
                py={{ base: 10, sm: 20, lg: 32 }}>
                <Stack spacing={{ base: 10, md: 20 }}>
                    <Heading
                        as='i'
                        lineHeight={1.1}
                        fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
                        bgGradient='linear(to-r,brand.600, brand.500, brand.400, brand.300)'
                        bgClip='text'>
                        Contrata ya tu entrenamiento & Comienza tu aventura
                    </Heading>
                    <Stack direction={'row'} spacing={4} align={'center'} alignSelf='center'>
                        <AvatarGroup>
                            {avatars.map((avatar) => (
                                <Avatar
                                    key={avatar.name}
                                    name={avatar.name}
                                    src={avatar.url}
                                    size={useBreakpointValue({ base: 'md', md: 'lg' })}
                                    position={'relative'}
                                    zIndex={2}
                                    _before={{
                                        content: '""',
                                        width: 'full',
                                        height: 'full',
                                        rounded: 'full',
                                        transform: 'scale(1.125)',
                                        bgGradient: 'linear(to-bl, brand.300,brand.600)',
                                        position: 'absolute',
                                        zIndex: -1,
                                        top: 0,
                                        left: 0,
                                    }}
                                />
                            ))}
                        </AvatarGroup>
                        <Text fontFamily={'heading'} fontSize={{ base: '4xl', md: '6xl' }}>
                            +
                        </Text>
                        <Flex
                            align={'center'}
                            justify={'center'}
                            fontFamily={'heading'}
                            fontSize={{ base: 'sm', md: 'lg' }}
                            bg={'gray.800'}
                            color={'white'}
                            rounded={'full'}
                            width={useBreakpointValue({ base: '44px', md: '60px' })}
                            height={useBreakpointValue({ base: '44px', md: '60px' })}
                            position={'relative'}
                            _before={{
                                content: '""',
                                width: 'full',
                                height: 'full',
                                rounded: 'full',
                                transform: 'scale(1.125)',
                                bgGradient: 'linear(to-bl, orange.400,yellow.400)',
                                position: 'absolute',
                                zIndex: -1,
                                top: 0,
                                left: 0,
                            }}>
                            YOU
                        </Flex>
                    </Stack>
                </Stack>

                <Stack
                    bg={'gray.50'}
                    rounded={'xl'}
                    p={{ base: 4, sm: 6, md: 8 }}
                    spacing={{ base: 8 }}
                    maxW={{ lg: 'lg' }}>
                    <Stack spacing={4}>
                        <Heading
                            color={'brand.600'}
                            lineHeight={1.1}
                            fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
                            textAlign={'center'}>
                            Quiero reservar mi entrenamiento
                        </Heading>
                        <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
                            Si ya estás registrado, solicita los días y la hora que te gustaría entrenar.
                        </Text>
                    </Stack>

                    <Box as={'form'} mt={10}>
                        <Stack>
                            <FormControl isRequired>
                                <FormLabel as='i' color={'brand.500'} fontSize='lg'>
                                    Email
                                </FormLabel>
                                <Input placeholder="nombre@mail.com" />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel as='i' color={'brand.500'} fontSize='lg' marginTop={'15px'}>
                                    Selecciona entrenador
                                </FormLabel>
                                <Input as='select' id='coach' placeholder='Entrenador'>
                                    <option>Jaume Gelabert</option>
                                </Input>
                            </FormControl>
                            <FormControl isRequired >
                                <FormLabel as='i' color={'brand.500'} fontSize='lg' marginTop={'15px'}>
                                    Selecciona los días que quieres entrenar
                                </FormLabel>
                                <CheckboxGroup colorScheme='orange' >
                                    <Stack spacing={[1, 6]} direction={['column', 'row']} alignSelf='center' justifyContent="space-around">
                                        <Checkbox value='lunes' size='sm'>L</Checkbox>
                                        <Checkbox value='martes' size='sm'>M</Checkbox>
                                        <Checkbox value='miercoles' size='sm'>X</Checkbox>
                                        <Checkbox value='jueves' size='sm'>J</Checkbox>
                                        <Checkbox value='viernes' size='sm'>V</Checkbox>
                                        <Checkbox value='sabado' size='sm'>S</Checkbox>
                                    </Stack>
                                </CheckboxGroup>
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel as='i' color={'brand.500'} fontSize='lg' marginTop={'15px'}>
                                    Hora que deseas entrenar
                                </FormLabel>
                                <Input as='select' id='hour' placeholder='8:00' marginBottom={10}>
                                    <option>9:00</option>
                                    <option>10:00</option>
                                    <option>11:00</option>
                                    <option>12:00</option>
                                    <option>13:00</option>
                                    <option>14:00</option>
                                    <option>15:00</option>
                                    <option>16:00</option>
                                    <option>17:00</option>
                                    <option>18:00</option>
                                    <option>19:00</option>
                                    <option>20:00</option>
                                </Input>
                            </FormControl>


                                <Button type='submit' bgGradient="linear(to-r, brand.300,brand.500,brand.300)"
                                    color="white"
                                    _hover={{
                                        bgGradient: 'linear(to-r, brand.500,brand.300,brand.500)',
                                        boxShadow: 'xl',
                                    }}
                                    isFullWidth>
                                    Reservar
                                </Button>

                        </Stack>
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}

export default WorkoutForm