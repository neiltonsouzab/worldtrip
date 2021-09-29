import { Container, Image, Icon, Flex, IconButton } from '@chakra-ui/react';
import { BsChevronLeft } from 'react-icons/bs';

export function Header() {
  return (
    <Container maxWidth={1120} marginY={0} marginX="auto" height={{ base: "50px", sm: "50px", md: "100px" }}>
      <Flex alignItems="center" justifyContent="center" height="100%" >
        <IconButton 
          aria-label="back"
          variant="unstyled"
          fontSize={{ base: "16px", sm: "16px", md: "32px" }}
          icon={<Icon as={BsChevronLeft} color="gray.60" />}
          marginRight="auto"
        ></IconButton>
        <Image 
          marginRight="auto" 
          src="/images/logo.svg" 
          alt="worldtrip" 
          width={{ base: "80px", sm: "80px", md: "185px" }} 
          height={{ base: "20px", sm: "20px", md: "45px" }} />
      </Flex>
    </Container>
  );
}