
import { Box, Stack, Text, Card, Heading, Spinner } from "@chakra-ui/react";
import { ACCOUNTABILITY_CONTRACT_ADDRESS } from "../cons/addresses";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import DepositFunds from "./Deposit";
import Task from "./Task";

export default function AccountabilityCard() {
    const {
        contract
    } = useContract(ACCOUNTABILITY_CONTRACT_ADDRESS);

    const {
        data: depositAmount,
        isLoading: isDepositAmountLoading,

    } = useContractRead(
        contract,
        "getDeposit"
    );

    const {
        data: taskCount,
        isLoading: isTaskCountLoading,
    } = useContractRead(
        contract,
        "getTaskCount"
    );

    return (
        <Card w={"60%"} p={10} textAlign={"center"}>
            <Heading size={"lg"}>Accountability Contract</Heading>
            {!isDepositAmountLoading && !isTaskCountLoading ? (
                <Box>
                    {depositAmount == 0 && taskCount == 0 ? (
                        <DepositFunds />
                    ) : (
                        <Stack spacing={8}>
                            <Box>
                                <Text fontSize={"lg"}>Deposit: {ethers.utils.formatEther(depositAmount)} gETH</Text>
                                <Text fontSize={"s"}>Deposit will be returned, when all Tasks are completed.</Text>
                            </Box>
                            <Task />
                        </Stack>
                    )}
                </Box>
            ) : (
                <Spinner />
            )}

            <Box mt={8}>
                <Text fontSize={"xl"} fontWeight={"bold"}>Sample Section</Text>
                <Text mt={2}>This is some sample text below the Card component.</Text>
            </Box>

        </Card>


    )

}