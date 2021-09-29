import Link from 'next/link';
import { Container, Flex, VStack, Text, Icon } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';

SwiperCore.use([Navigation, Pagination]);

import 'swiper/css';
import "swiper/css/navigation"
import "swiper/css/pagination"

export function Caurosel() {
  return (
    <Container
      maxWidth={1120}
      marginX="auto"
      height={{ base: "250px", sm: "250", md: "450px" }}
      marginTop={{ base: "20px", sm: "20px", md: "50px" }}
      marginBottom={{ base: "30px", sm: "30px", md: "64px" }}
    >
      <Swiper 
        navigation={true} 
        pagination={true} 
      >
        <SwiperSlide>
          <Link passHref href="/continents/europe">
            <Flex
              height="100%"
              background="linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url(/images/europe.png);"
              justifyContent="center"
              alignItems="center"
            >
              <VStack
                spacing={{ base: "12px", sm: "12px", md: "16px" }}
              >
                <Text 
                  fontSize={{ base: "24px", sm: "24px", md: "48px" }} 
                  fontWeight="bold" 
                  color="gray.50"
                >
                  Europa
                </Text>

                <Text
                  fontSize={{ base: "14px", sm: "14px", md: "24px" }}
                  fontWeight="bold"
                  color="#DADADA"
                >
                  O continente mais antigo.
                </Text>
              </VStack>
            </Flex>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Flex
            height="100%"
            background="linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url(/images/america-do-sul.jpeg);"
            justifyContent="center"
            alignItems="center"
          >
            <VStack
              spacing={{ base: "12px", sm: "12px", md: "16px" }}
            >
              <Text 
                fontSize={{ base: "24px", sm: "24px", md: "48px" }} 
                fontWeight="bold" 
                color="gray.50"
              >
                America do Sul
              </Text>

              <Text
                fontSize={{ base: "14px", sm: "14px", md: "24px" }}
                fontWeight="bold"
                color="#DADADA"
              >
                O continente mais bonito.
              </Text>
            </VStack>
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Flex
            height="100%"
            background="linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url(/images/africa.jpeg);"
            justifyContent="center"
            alignItems="center"
          >
            <VStack
              spacing={{ base: "12px", sm: "12px", md: "16px" }}
            >
              <Text 
                fontSize={{ base: "24px", sm: "24px", md: "48px" }} 
                fontWeight="bold" 
                color="gray.50"
              >
                Africa
              </Text>

              <Text
                fontSize={{ base: "14px", sm: "14px", md: "24px" }}
                fontWeight="bold"
                color="#DADADA"
              >
                O continente mais natural.
              </Text>
            </VStack>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Container>
  )
}