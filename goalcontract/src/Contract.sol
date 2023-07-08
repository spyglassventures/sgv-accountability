// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract GoelSettingContract {
    struct Task {
        string description;
        bool isCompleted;
    }

    Task[] public tasks; // array of tasks
    uint256 public deposit; // deposit amount
    address public owner; // owner of the contract can interact with functions of contract

    event TaskCreated(uint256 taskID, string description);
    event TaskCompleted(uint256 taskID);
    event DepositWithdrawn(uint256 amount); // emit event to blockchain when deposit is withdrawn

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    // gets called when contract is deployed
    constructor() {
        owner = msg.sender;
    }


    // only owner can create task
    function createTask(string memory _description) public onlyOwner {
        // add task to array, set isCompleted to false as default
        tasks.push(Task(_description, false));
        // id of task is length of array - 1, then emit description
        emit TaskCreated(tasks.length - 1, _description);
    }

    // 
    function depositFunds() public payable {
        require(msg.value > 0, "You need to send some Matic");
        // deposit funds to contract if require statement is met
        deposit += msg.value;
    }

    // withdraw funds from contract
    function withrawDepositSafely() public onlyOwner {
        require(deposit > 0, "There are no funds to withdraw");
        uint256 amount = deposit;
        deposit = 0;
        payable(msg.sender).transfer(amount);
        emit DepositWithdrawn(amount);
    }

    // complete task
    function allTasksCompleted() public view returns (bool) {
        for (uint256 i = 0; i < tasks.length; i++) {
            if (!tasks[i].isCompleted) {
                return false;
            }
        }
        return true;
    }

    // clear task
    function clearTask() private {
        delete tasks;
    }

    function completeTask(uint256 _taskID) public onlyOwner {
        require(_taskID < tasks.length, "Task does not exist");
        require(!tasks[_taskID].isCompleted, "Task is already completed");

        tasks[_taskID].isCompleted = true;
        emit TaskCompleted(_taskID);

        if (allTasksCompleted()) {
            uint256 amount = deposit;
            payable(owner).transfer(amount);
            deposit = 0;
            emit DepositWithdrawn(amount);
            clearTask();
        }
    }

    // Additional functions

    function getTaskCount() public view returns (uint256) {
        return tasks.length;
    }

    // return deposit variable
    function getDeposit() public view returns (uint256) {
        return deposit;
    }

    function getTasks() public view returns (Task[] memory) {
        return tasks;
    }


}
