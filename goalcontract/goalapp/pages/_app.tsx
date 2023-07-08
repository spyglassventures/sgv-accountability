import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
//import { ThirdwebProvider } from "/node_modules/@thirdweb-dev/react";
//import "../styles/globals.css"; // we use chakra so we don't need this
import { ChakraProvider } from "/node_modules/@chakra-ui/react";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
//const activeChain = "ethereum";
const activeChain = "goerli"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={activeChain}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
