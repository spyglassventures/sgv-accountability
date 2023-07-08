import { Card, Flex, Text, useToast } from "@chakra-ui/react";
import { Web3Button } from "@thirdweb-dev/react";
import { ACCOUNTABILITY_CONTRACT_ADDRESS } from "../cons/addresses";

type Props = {
    taskId: string;
    task: string;
    isCompleted: boolean;
};

export default function TaskCard({ taskId, task, isCompleted }: Props) {
    let backgroundColor = "white";
    let borderColor = "gray.200";
    let fontColor = "grey.700";

    if (isCompleted) {
        backgroundColor = "green.500";
        borderColor = "green.500";
        fontColor = "white";
    }

    const toast = useToast();
    return (
        <Card p={8} backgroundColor={backgroundColor} borderColor={borderColor} borderWidth={1} borderRadius={10} color={fontColor}>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
                <Text fontSize={"lg"}>{task}</Text>
                {/** task completed */}
                {/** task not completed */}
                {isCompleted ? (
                    <Text fontWeight={"bold"} color={fontColor}>Completed</Text>
                ) : (

                    < Web3Button
                        contractAddress={ACCOUNTABILITY_CONTRACT_ADDRESS}
                        action={(contract) => contract.call(
                            "completeTask",
                            [taskId]
                        )}
                        onSuccess={() => {
                            toast({
                                title: "Task completed",
                                status: "success",
                                duration: 2000,
                                isClosable: true,
                            });
                        }}


                    >🔲</Web3Button>


                )}
            </Flex>

        </Card >
    )


}