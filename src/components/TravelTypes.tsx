import { Container, Grid, GridItem, VStack, Stack, Image, Text, useBreakpointValue, Box } from "@chakra-ui/react";

export function TravelTypes() {
  const isMobile = useBreakpointValue({ base: true, sm: true, md: false, lg: false });

  console.log(isMobile);

  return (
    <Container 
      maxWidth={1120} 
      marginY={0} 
      marginX="auto" 
      marginTop={{ base: "9", md: "20" }}
    >
      <Grid 
        gap="6" 
        templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(5, 1fr)" }}
      >
          <GridItem 
            display="flex" 
            flexDir={{ base: 'row', sm: 'row', md: 'column' }}
            alignItems="center"
            justifyContent="center"
            gridGap="6"
          >
            {isMobile ? (
              <Box width="8px" height="8px" borderRadius="100%" backgroundColor="#FFBA08" />
            ) : <Image src="/images/cocktail.svg" width={85} height={85} alt="vida noturna"/>}
            <Text 
              fontSize={{ base: "16px", sm: "16px", md: "24px" }} 
              fontWeight={{ base: '500', sm: '500', md: '600'}}
            >
              vida noturna
            </Text>
          </GridItem>

          <GridItem
            display="flex" 
            flexDir={{ base: 'row', sm: 'row', md: 'column' }}
            alignItems="center" 
            justifyContent="center"
            gridGap="6"
          >
            {isMobile ? (
              <Box width="8px" height="8px" borderRadius="100%" backgroundColor="#FFBA08" />
            ) : <Image src="/images/surf.svg" height={85} alt="vida noturna" />}
            <Text 
              fontSize={{ base: "16px", sm: "16px", md: "24px" }} 
              fontWeight={{ base: '500', sm: '500', md: '600'}}
            >
              praia
          </Text>
          </GridItem>

          <GridItem 
            display="flex" 
            flexDir={{ base: 'row', sm: 'row', md: 'column' }}
            alignItems="center" 
            justifyContent="center"
            gridGap="6"
          >
            {isMobile ? (
              <Box width="8px" height="8px" borderRadius="100%" backgroundColor="#FFBA08" />
            ) : <Image src="/images/building.svg"  height={85} alt="vida noturna"/>}
            <Text 
              fontSize={{ base: "16px", sm: "16px", md: "24px" }} 
              fontWeight={{ base: '500', sm: '500', md: '600'}}
            >
              moderno
            </Text>
          </GridItem>

          <GridItem
            display="flex" 
            flexDir={{ base: 'row', sm: 'row', md: 'column' }}
            alignItems="center"
            justifyContent="center"
            gridGap="6"
          >
            {isMobile ? (
              <Box width="8px" height="8px" borderRadius="100%" backgroundColor="#FFBA08" />
            ) : <Image src="/images/museum.svg" height={85} alt="vida noturna" />}
            <Text 
              fontSize={{ base: "16px", sm: "16px", md: "24px" }} 
              fontWeight={{ base: '500', sm: '500', md: '600'}}
            >
              clássico
            </Text>
          </GridItem>

          <GridItem
            display="flex" 
            flexDir={{ base: 'row', sm: 'row', md: 'column' }}
            alignItems="center"
            justifyContent="center"
            gridGap="6"
            colSpan={{ base: 2, sm: 2, md: 1 }}
          >
            {isMobile ? (
              <Box width="8px" height="8px" borderRadius="100%" backgroundColor="#FFBA08" />
            ) : <Image src="/images/earth.svg" height={85} alt="vida noturna" />}
            <Text 
              fontSize={{ base: "16px", sm: "16px", md: "24px" }} 
              fontWeight={{ base: '500', sm: '500', md: '600'}}
            >
              e mais...
            </Text>
          </GridItem>
      </Grid>
    </Container>
  )
}