import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
//import styles from "../styles/Home.module.css";
//import Image from "next/image";
import { NextPage } from "next";
//import { Container } from "@chakra-ui/react";
//import { Container } from "/node_modules/@chakra-ui/react";
import { Box, Flex, Container } from "@chakra-ui/react";
import AccountabilityCard from "../components/AccountabilityCard";

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


      </Flex>
    </Container >
  );
};

export default Home;
