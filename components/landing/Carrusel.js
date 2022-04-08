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

// Settings for the slider
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
  const [slider, setSlider] = React.useState('');
  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  const cards = [
    {
      title: 'Entrenamiento de fuerza',
      text:
        "Los ejercicios de fuerza mejoran la densidad ósea, disminuyendo así el posible riesgo de osteoporosis o fracturas y protegiendo a la vez nuestras articulaciones. Además, logramos prevenir lesiones, ya que músculos, tendones y ligamentos tienen menos riesgo de dañarse, pudiendo resistir trabajos con mayor intensidad..",
      image:
        'https://github.com/amorellb/salutarreu/blob/37-landing-page-components/public/images/landing/10.png?raw=true',
    },
    {
      title: 'Entrenamiento funcional',
      text:
        "Este tipo de entrenamiento se basa en la realización de ejercicios que tienen como fin mejorar nuestro bienestar general de manera que se mejore nuestra capacidad para realizar cualquier tarea que implique movimiento de manera mucho más efectiva, menos dolorosa, con mayor resistencia y más flexibilidad, entre otras..",
      image:
        'https://github.com/amorellb/salutarreu/blob/37-landing-page-components/public/images/landing/11.png?raw=true',
    },
    {
      title: 'Cardio',
      text:
        "Los ejercicios de entrenamiento cardio, son los que aumentan nuestro ritmo cardíaco, incrementan nuestra capacidad de resistencia, y mejoran nuestra condición física..",
      image:
        'https://github.com/amorellb/salutarreu/blob/37-landing-page-components/public/images/landing/12.png?raw=true',
    },
  ];

  return (
    <Box
      position={'relative'}
      height={'600px'}
      width={'80%'}
      overflow={'hidden'}
      margin={'200px'}>
      
      {/* CSS files for react-slick */}
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
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
        color={'brand.300'}
        backgroundColor={'brand.600'}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}
        color={'brand.300'}
        backgroundColor={'brand.600'}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
            >
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={3}
                w={'700px'}
                maxW={'100%'}
                position="absolute"
                top="70%"
                transform="translate(0, -50%)">
                <Heading 
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                color={'black'}
                >
                  {card.title}
                </Heading>
                <Text 
                fontSize={{ base: 'md', lg: 'lg' }} 
                color="brand.600">
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