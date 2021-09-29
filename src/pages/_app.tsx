import { ChakraProvider } from '@chakra-ui/react';

import { theme } from '../styles/theme';

import { Header } from '../components/Header';

import '../styles/caurosel.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
