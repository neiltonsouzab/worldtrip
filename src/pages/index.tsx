import { Box, Center, Text } from '@chakra-ui/react';

import { Banner } from "../components/Banner";
import { Caurosel } from '../components/Caurosel';
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";


export default function Home() {
  return (
    <>
      <Banner />
      <TravelTypes />

      <Center margin={{ base: "36px", md: "80px" }}>
        <Box width="90px" height="2px" backgroundColor="gray.600" />
      </Center>

      <Center>
        <Text textAlign="center" fontSize={{ base: "20px", md: "36px" }} lineHeight={{ base: "30px", md: "54px" }} fontWeight="500">
          Vamos nessa? <br />
          Então escolha seu continente
        </Text>
      </Center>
    
      <Caurosel />
    </>
  )
}
