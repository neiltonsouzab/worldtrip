import { Box, Text, Container, Stack, HStack, VStack, Grid, GridItem, Image } from '@chakra-ui/react';

export default function Europe() {
  return (
    <>
      <Box
        display="flex"
        height={{ base: "150px", sm: "150px", md: "500px"}}
        alignItems={{ base: "center", sm: "center", md: "flex-end" }}
        justifyContent={{ base: "center", sm: "center", md: "flex-start" }}
        padding="60px"
        background="linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url(https://images.unsplash.com/photo-1526821799652-2dc51675628e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2156&q=80)"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      >
        <Text
          as="h1"
          fontSize={{ base: "28px", sm: "28px", md: "48px"}}
          fontWeight="semibold"
          color="gray.50"
        >
          Europa
        </Text>
      </Box>

      <Container 
        maxWidth={1120} 
        marginY={0} 
        marginX="auto"
        marginTop="80px"
      >
        <Stack 
          direction={{ base: 'column', sm: 'column', md: 'column', lg: "row" }} 
          spacing={{ base: "16px", sm: "16px", md: "70px" }}
          alignItems="center"
        >
          <Text 
            fontSize={{ base: '16px', sm: '16px', md: '24px' }} 
            lineHeight={{ base: '20px', sm: '20px', md: '36px' }} 
            textAlign="justify"
            color="gray.600"
            maxWidth="600px"
          >
            A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>


          <HStack
            spacing="42px"
          >
            <VStack>
              <Text
                fontSize={{ base: '24px', sm: '24px', md: '48px' }} 
                fontWeight="semibold"
                color="yellow.500"
              >
                50
              </Text>
              <Text
                fontSize={{ base: '18px', sm: '18px', md: '24px' }} 
                fontWeight="semibold"
                color="gray.600"
              >
                países
              </Text>
            </VStack>

            <VStack>
              <Text
                fontSize={{ base: '24px', sm: '24px', md: '48px' }} 
                fontWeight="semibold"
                color="yellow.500"
              >
                60
              </Text>
              <Text
                fontSize={{ base: '18px', sm: '18px', md: '24px' }}
                fontWeight="semibold"
                color="gray.600"
              >
                línguas
              </Text>
            </VStack>

            <VStack>
              <Text
                fontSize={{ base: '24px', sm: '24px', md: '48px' }} 
                fontWeight="semibold"
                color="yellow.500"
              >
                27
              </Text>
              <Text
                fontSize={{ base: '18px', sm: '18px', md: '24px' }}
                fontWeight="semibold"
                color="gray.600"
              >
                cidades +100
              </Text>
            </VStack>
          </HStack>
        </Stack>
      
        <Text
          marginTop={{ base: '32px', sm: '32px', md: '80px' }}
          fontSize={{ base: '24px', sm: '24px', md: '36px' }}
          textAlign={{ base: "center", sm: "center", md: "center", lg: "center", xl:  "left"}}
          color="gray.600"
        >
          Cidades + 100
        </Text>

        <Grid 
          margin={{ base: '32px 0', sm: '32px 0', md: '40px 0' }} 
          gap={{ base: '20px', sm: '40px', md: '40px' }} 
          templateColumns={{ base: "repeat(1, 250px)", sm: "repeat(2, 250px)", md: "repeat(2, 250px)", lg: "repeat(3, 250px)", xl:  "repeat(4, 250px)"}}
          justifyContent="center"
        >
          <GridItem >
            <Image 
              src="https://images.unsplash.com/photo-1592597957186-61f26ba94e16?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80" 
              alt="Londres"
              borderTopRadius="4px"
              width="250px"
              height="170px"
              objectFit="cover"
            />

            <HStack 
              alignItems="center" 
              justifyContent="space-between"
              padding="18px"
              border="1px solid rgba(255, 186, 8, 0.5)"
              borderTop="none"
              borderBottomRadius="4px"
            >
              <VStack 
                spacing="12px" 
                alignItems="flex-start"
              >
                <Text
                  fontSize="20px"
                  fontWeight="semibold"
                  color="gray.600"
                >
                  Londres
                </Text>

                <Text
                  fontSize="16px"
                  fontWeight="medium"
                  color="#999999"
                >
                  Reino Unido
                </Text>
              </VStack>

              <Image src="/images/united-kingdom.svg" alt="Reino Unido" width="30px" height="30px" />
            </HStack>
          </GridItem>

          <GridItem >
            <Image 
              src="https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGFyaXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
              alt="Londres"
              borderTopRadius="4px"
              width="250px"
              height="170px"
              objectFit="cover"
            />

            <HStack 
              alignItems="center" 
              justifyContent="space-between"
              padding="18px"
              border="1px solid rgba(255, 186, 8, 0.5)"
              borderTop="none"
              borderBottomRadius="4px"
            >
              <VStack 
                spacing="12px" 
                alignItems="flex-start"
              >
                <Text
                  fontSize="20px"
                  fontWeight="semibold"
                  color="gray.600"
                >
                  Paris
                </Text>

                <Text
                  fontSize="16px"
                  fontWeight="medium"
                  color="#999999"
                >
                  Reino Unido
                </Text>
              </VStack>

              <Image src="/images/france.svg" alt="França" width="30px" height="30px" />
            </HStack>
          </GridItem>
        
          <GridItem >
            <Image 
              src="https://images.unsplash.com/photo-1612271598100-5443d0095025?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" 
              alt="Roma"
              borderTopRadius="4px"
              width="250px"
              height="170px"
              objectFit="cover"
            />

            <HStack 
              alignItems="center" 
              justifyContent="space-between"
              padding="18px"
              border="1px solid rgba(255, 186, 8, 0.5)"
              borderTop="none"
              borderBottomRadius="4px"
            >
              <VStack 
                spacing="12px" 
                alignItems="flex-start"
              >
                <Text
                  fontSize="20px"
                  fontWeight="semibold"
                  color="gray.600"
                >
                  Roma
                </Text>

                <Text
                  fontSize="16px"
                  fontWeight="medium"
                  color="#999999"
                >
                  Itália
                </Text>
              </VStack>

              <Image src="/images/italy.svg" alt="Itália" width="30px" height="30px" />
            </HStack>
          </GridItem>

          <GridItem >
            <Image 
              src="https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" 
              alt="Praga"
              borderTopRadius="4px"
              width="250px"
              height="170px"
              objectFit="cover"
            />

            <HStack 
              alignItems="center" 
              justifyContent="space-between"
              padding="18px"
              border="1px solid rgba(255, 186, 8, 0.5)"
              borderTop="none"
              borderBottomRadius="4px"
            >
              <VStack 
                spacing="12px" 
                alignItems="flex-start"
              >
                <Text
                  fontSize="20px"
                  fontWeight="semibold"
                  color="gray.600"
                >
                  Praga
                </Text>

                <Text
                  fontSize="16px"
                  fontWeight="medium"
                  color="#999999"
                >
                  República Tcheca
                </Text>
              </VStack>

              <Image src="/images/czech-republic.svg" alt="República Tcheca" width="30px" height="30px" />
            </HStack>
          </GridItem>

          <GridItem >
            <Image 
              src="https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW1zdGVyZGFtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
              alt="Amsterdã"
              borderTopRadius="4px"
              width="250px"
              height="170px"
              objectFit="cover"
            />

            <HStack 
              alignItems="center" 
              justifyContent="space-between"
              padding="18px"
              border="1px solid rgba(255, 186, 8, 0.5)"
              borderTop="none"
              borderBottomRadius="4px"
            >
              <VStack 
                spacing="12px" 
                alignItems="flex-start"
              >
                <Text
                  fontSize="20px"
                  fontWeight="semibold"
                  color="gray.600"
                >
                  Amsterdã
                </Text>

                <Text
                  fontSize="16px"
                  fontWeight="medium"
                  color="#999999"
                >
                  República Tcheca
                </Text>
              </VStack>

              <Image src="/images/netherlands.svg" alt="Holanda" width="30px" height="30px" />
            </HStack>
          </GridItem>
        </Grid>
      </Container>
    </>
  )
}