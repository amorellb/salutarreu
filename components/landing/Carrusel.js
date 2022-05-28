import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  /* const [isLessThan768px] = useMediaQuery('(min-width: 768px)') */
  const [slider, setSlider] = React.useState(null);
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  const cards = [
    {
      title: 'Entrenamiento de fuerza',
      text: 'Los ejercicios de fuerza mejoran la densidad ósea, disminuyendo así el posible riesgo de osteoporosis o fracturas y protegiendo a la vez nuestras articulaciones. Además, logramos prevenir lesiones, ya que músculos, tendones y ligamentos tienen menos riesgo de dañarse, pudiendo resistir trabajos con mayor intensidad.',
      image:
        'https://github.com/amorellb/salutarreu/blob/main/public/images/landing/18.jpg?raw=true'
    },
    {
      title: 'Entrenamiento funcional',
      text: 'Este tipo de entrenamiento se basa en la realización de ejercicios que tienen como fin mejorar nuestro bienestar general de manera que se mejore nuestra capacidad para realizar cualquier tarea que implique movimiento de manera mucho más efectiva, menos dolorosa, con mayor resistencia y más flexibilidad, entre otras.',
      image:
        'https://github.com/amorellb/salutarreu/blob/main/public/images/landing/10.png?raw=true'
    },
    {
      title: 'Entrenamiento cardiovascular',
      text: 'Los ejercicios de entrenamiento cardio, son los que aumentan nuestro ritmo cardíaco, incrementan nuestra capacidad de resistencia, y mejoran nuestra condición física. Ayuda a controlar la presión arterial y fortalece el sistema inmunológico. Baja la presión arterial y la frecuencia cardiaca en reposo. ',
      image:
        'https://raw.githubusercontent.com/amorellb/salutarreu/main/public/images/landing/27.jpg'
    }
  ]

  return (
    <Box
      as="section"
      position={'relative'}
      height={{ base: '600px', lg: '800px' }}
      width={'full'}
      overflow={'hidden'}
      mb={{ base: '2rem', md: '8rem' }}>
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
        color={'brand.600'}
        backgroundColor={'brand.600'}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}
        color={'brand.600'}
        backgroundColor={'brand.600'}>
        <BiRightArrowAlt size="40px" />
      </IconButton>

      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={{ base: '4xl', xs: 'xl', sm: 'xl', md: 'xl', lg: 'xl' }}
            position="relative"
            backgroundPosition="bottom"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}>
            <Container
              height={{ base: "600px", md: '800px' }}>
              <Stack
                w={'100%'}
                position="absolute"
                top={{ base: "40%", md: '25%', lg: "33%" }}
                left="0%"
                backdropFilter='auto'
                backdropBrightness='65%'
                px={{ base: '2%', md: '20%' }}
                textAlign={{ base: 'center', md: 'right' }}>
                <Heading
                  as={'h2'}
                  lineHeight={1.1}
                  fontSize={{ base: '2xl', lg: '5xl' }}
                  color={'whiteAlpha.700'}
                  letterSpacing={'1px'}
                  pt={4}>
                  {card.title}
                </Heading>
                <Text
                  fontSize={{ base: 'xs', lg: 'xl', xl: '2xl' }}
                  color="brand.300"
                  textAlign={'justify'}
                  px={'5px'}
                  pb={4}
                  letterSpacing={'1px'}>
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}