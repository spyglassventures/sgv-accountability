import { Input, Spinner, Stack, Text } from "@chakra-ui/react";
import { useContract, useContractRead, Web3Button } from "@thirdweb-dev/react";
import { ACCOUNTABILITY_CONTRACT_ADDRESS } from "../cons/addresses";
import { useState } from "react";
import TaskCard from "./TaskCard";
import AddTask from "./AddTaskButton";


export default function Tasks() {
    const {
        contract
    } = useContract(ACCOUNTABILITY_CONTRACT_ADDRESS);

    const {
        data: taskCount,
        isLoading: isTaskCountLoading
    } = useContractRead(
        contract,
        "getTaskCount"
    );

    const [firstTask, setFirstTask] = useState("");

    const {
        data: tasks,
        isLoading: isTasksLoading
    } = useContractRead(
        contract,
        "getTasks",
    );

    return (
        <Stack>
            {!isTaskCountLoading ? (
                taskCount != 0 ? (
                    <Stack>
                        {!isTasksLoading ? (
                            tasks.map((task: any, index: number) => (
                                <TaskCard
                                    key={index}
                                    taskId={index}
                                    task={task[0]}
                                    isCompleted={task[1]}
                                />
                            ))
                        ) : (
                            <Spinner />
                        )}
                        <AddTask />
                    </Stack>
                ) : (
                    <Stack>
                        <Text textAlign={"left"}>Create a your first task:</Text>
                        <Input
                            placeholder="Your first task."
                            type="text"
                            value={firstTask}
                            onChange={(e) => setFirstTask(e.target.value)}
                        />
                        <Web3Button
                            contractAddress={ACCOUNTABILITY_CONTRACT_ADDRESS}
                            action={(contract) => contract.call(
                                "createTask",
                                [firstTask]
                            )}
                        >Create task</Web3Button>
                    </Stack>
                )
            ) : (
                <Spinner />
            )}
        </Stack>
    )
}