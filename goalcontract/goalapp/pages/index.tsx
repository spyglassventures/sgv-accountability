import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import { NextPage } from "next";
import { Box, Flex, Container } from "@chakra-ui/react";
import AccountabilityCard from "../components/AccountabilityCard";
import Footer from "../components/Footer";

const Home: NextPage = () => {

  // show app only if connected
  const address = useAddress()



  return (
    <Container maxW={"1440px"}>
      <Flex justifyContent={"center"} alignItems={"center"} height={"100vh"} flexDirection={"column"}>
        <ConnectWallet />
        <Box h={"100px"} > </Box>
        {address && (
          <AccountabilityCard />
        )}

        <Box h={"100px"} > </Box>

        <Box h={"100px"} maxW={"1440px"}>
          {address && (
            <Footer />
          )}
        </Box>


      </Flex>
    </Container >










  );
};

export default Home;
