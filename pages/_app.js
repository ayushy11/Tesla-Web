import "../styles/globals.css";
import { theme } from "../lib/theme";
import { ChakraProvider } from "@chakra-ui/react";

// import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
// import SomeProvider from "components/Providers/SomeProvider";

import { Provider } from 'react-redux';
import store from '@/redux/store';

function MyApp({ Component, pageProps }) {
  return (    
    <ChakraProvider theme={theme}>
          <Component {...pageProps} />
      </ChakraProvider>
  );
}

export default MyApp;

// <Provider store={store}>
      {/* <AnimateSharedLayout> */}
        {/* <SomeProvider> */}
        {/* </SomeProvider> */}
      {/* </AnimateSharedLayout> */}
// </Provider>
