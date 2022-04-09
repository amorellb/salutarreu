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
  const top = useBreakpointValue({ base: '85%', md: '50%', xl:'80%' });
  const side = useBreakpointValue({ base: '20%', md: '40px', xl:'20%' });

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
      title: 'Entrenamiento cardiovascular',
      text:
        "Los ejercicios de entrenamiento cardio, son los que aumentan nuestro ritmo cardíaco, incrementan nuestra capacidad de resistencia, y mejoran nuestra condición física. Ayuda a controlar la presión arterial y fortalece el sistema inmunológico. Baja la presión arterial y la frecuencia cardiaca en reposo. ",
      image:
        'https://github.com/amorellb/salutarreu/blob/37-landing-page-components/public/images/landing/12.png?raw=true',
    },
  ];

  return (
    <Box
      position={'relative'}
      height={{ base: '700px', lg: '600px' }}
      width={'100%'}
      overflow={'hidden'}
      margin='100px'>

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
            height={{base:'xl', xl:'md' }}
            position="relative"
            backgroundPosition={{ base: "right", md: "left" }}
            backgroundRepeat="no-repeat"
            backgroundSize={{ sm: "cover", md: "cover", lg: "contain" }}
            backgroundImage={`url(${card.image})`}

          >
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.xl" height="600px" position="relative">
              <Stack
                spacing={5}
                w={'800px'}
                maxWidth={'100%'}
                position="absolute"
                top={{ base: "70%", md: '50%', lg: '60%' }}
                transform={{ base: "translate(0, -60%)", md: "translate(5%, 20%)", lg: "translate(-10%, -10%)", xl:"translate(25%, -80%)" }}
              >
                <Heading
                  as={'h2'}
                  lineHeight={1.1}
                  fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
                >
                  <Text
                    as={'span'}
                    position={'relative'}
                    _after={{
                      content: "''",
                      width: 'full',
                      height: '30%',
                      position: 'absolute',
                      bottom: 1,
                      left: 0,
                      bg: 'brand.400',
                      zIndex: -1
                    }}
                  >
                    {card.title}
                  </Text>
                </Heading>
                <Text
                  width={{ base: '400px', md: '480px', lg: '650px', xl:'750px' }}
                  fontSize={{ base: 'md', lg: 'lg' }}
                  color="brand.600"
                  fontWeight={'bold'}
                  p={'10px'}
                  borderRadius={'10px'}
                  backgroundColor={'whiteAlpha.300'}
                  textAlign={'justify'}
                  paddingLeft={5}
                >
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