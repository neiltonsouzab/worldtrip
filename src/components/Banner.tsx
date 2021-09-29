import { Container, Box, Text, Flex, Image } from '@chakra-ui/react';

export function Banner() {
  return (
    <Box 
      height={{ base: "40", sm: "80" }}
      backgroundImage="/images/banner.svg"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Container maxWidth={1120} marginY={0} marginX="auto" height="100%" position="relative">
        <Flex direction="column" alignItems="flex-start" justifyContent="center" height="100%">
          <Text 
            fontSize={{ base: '20px', sm: "36px" }} 
            lineHeight={{ base: '30px', sm: '54px' }}
            fontWeight="medium" 
            color="gray.50"
          >
            5 Continentes, <br />
            infinitas possibilidades.
          </Text>

          <Text 
            fontWeight="normal" 
            fontSize={{ base: "14px", sm: "20px" }} 
            lineHeight={{ base:"20px", sm: "30px"}}
            marginTop={{ base: "2", sm: "5" }}
            color="gray.300" 
            maxWidth={524}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
          </Text>
        </Flex>

        <Image 
          display={{ base: 'none', md: 'none', lg: 'inherit' }} 
          src="/images/airplane.svg" alt="airplane" position="absolute" right="0" bottom="-10" 
        />
      </Container>
    </Box>
  )
}