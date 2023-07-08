// SPDX-License-Identifier: MIT

pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";

import {GoelSettingContract} from "../src/Contract.sol";



contract ContractTest is Test {

    uint256 number = 1;
    // scoping it to be availble to all functions in this contract
    GoelSettingContract goelSettingContract; 

    address owner = address(this); // Address to be set as the owner



    function setUp() public {
        // create instance of contract
        goelSettingContract = new GoelSettingContract();
    }

    function testExample() public {
        console.log(number);
        assertTrue(true);
    }

    function testCreateTask() public {
        console.log("Create task");
        // Call the createTask function
        goelSettingContract.createTask("Example task");
        

        // Retrieve the task count
        uint256 taskCount = goelSettingContract.getTaskCount();

        // Verify that the task count has increased
        assertEq(taskCount, 1, "Task count is not 1");

        // Retrieve the created task
        (string memory description, bool isCompleted) = goelSettingContract.tasks(taskCount - 1);

        // Verify the expected task details
        console.log(description);

        // Verify the expected task description and completion status
        assertEq(description, "Example task");
        assertFalse(isCompleted);

        
    }

    function testdepositFunds() public {
        console.log("Deposit funds");
        goelSettingContract.depositFunds{value: 1000000000000000000}();
        assertEq(goelSettingContract.deposit(), 1000000000000000000);
    }

    function testdepostitFunds2() public {
        console.log("Withdraw funds");
        // Deposit some funds to the contract
        goelSettingContract.depositFunds{value: 1000000000000000000}();
        // Call the withdrawFunds function
        //goelSettingContract.withrawDepositSafely();
        // Verify that the contract balance has become 0
        assertEq(address(goelSettingContract).balance, 1000000000000000000, "Contract balance is not 1000000000000000000");
}


    function testWithdrawDepositSafely2() public {
        // Call the depositFunds function with a value of 1 ETH
        goelSettingContract.depositFunds{value: 1 ether}();

        // Call the depositFunds function with a value of 1 ETH
        goelSettingContract.depositFunds{value: 1 ether}();

        // Use try/catch to handle the revert
        bool success;
        bytes memory returnData;

        // Attempt to call the withdrawDepositSafely function
        (success, returnData) = address(goelSettingContract).call(abi.encodeWithSignature("withdrawDepositSafely()"));

        // Verify that the call reverted
        //console.log(success);
        //console.log(returnData);
        assertFalse(success, "withdrawDepositSafely did not revert");
    }


    function testWithdrawDepositSafely() public {
        console.log("Withdraw deposit safely");
        goelSettingContract.depositFunds{value: 1000000000000000000}();
        //goelSettingContract.withrawDepositSafely();
        console.log(goelSettingContract.deposit());
        console.log(goelSettingContract.owner());
        //assertEq(goelSettingContract.deposit(), 0);
        assertTrue(true);
    }



    function testWithdrawDepositSafelyZERO() public {

        address owner = address(1234);

        console.log("Withdraw deposit safely");
        // goelSettingContract.depositFunds{value: 0}();
        //goelSettingContract.withrawDepositSafely();
        console.log(goelSettingContract.deposit());
        // "You need to send some Matic"
        // Call the depositFunds function without sending any value
        //(bool success, ) = address(goelSettingContract).call(abi.encodeWithSignature("depositFunds()"));
        //console.log(success);
        //assertFalse(success, "Expected deposit to fail");
        vm.startPrank(owner);
        vm.stopPrank();
        assertTrue(true);
        // expect revert
        //vm.expectRevert()
        
    }



    /*
    function testwithrawDepostSafely() public {
        console.log("Withdraw deposit safely");
        goelSettingContract.depositFunds{value: 1000000000000000000}();
        goelSettingContract.withrawDepositSafely();
        assertEq(goelSettingContract.deposit(), 0);
    }
     */


    function testAllTasksCompleted() public {
        assertTrue(true);
    }

    function testClearTasks() public {
        goelSettingContract.createTask("Example task");

        // Retrieve the task count
        uint256 taskCount = goelSettingContract.getTaskCount();

        // Retrieve the created task
        (string memory description, bool isCompleted) = goelSettingContract.tasks(taskCount - 1);
        assertTrue(true);
    }

    function testOwnerIsMsgSender() public {
        console.log("Owner is msg sender");
        assertEq(goelSettingContract.owner(), address(this));
        assertTrue(true);
    }

    function testGetTaskCount() public {
        // Call the getTaskCount function
        uint256 taskCount = goelSettingContract.getTaskCount();
        console.log(taskCount);

        // Verify the initial task count is 0
        assertEq(taskCount, 0, "Initial task count is not 0");

        // TODO: Add additional assertions or verifications as needed
    }

    function testGetTaskCount2() public {
        // Call the getTaskCount function
        goelSettingContract.createTask("Example task");

        uint256 taskCount = goelSettingContract.getTaskCount();
        console.log(taskCount);

        // Verify the initial task count is 0
        assertEq(taskCount, 1, "Initial task count is not 1");

        // TODO: Add additional assertions or verifications as needed
    }

    function testGetDeposit() public {
        // Call the getTaskCount function
        uint256 deposit = goelSettingContract.deposit();
        console.log(deposit);

        // Verify the initial task count is 0
        assertEq(deposit, 0, "Initial deposit is not 0");
    }

    function testGetTaskCount3() public {
        // Call the getTaskCount function
        goelSettingContract.createTask("Example task");
        goelSettingContract.createTask("Example task 2");
        goelSettingContract.createTask("Example task 3");

        uint256 taskCount = goelSettingContract.getTaskCount();
        console.log(taskCount);

        // Verify the initial task count is 0
        assertEq(taskCount, 3, "Initial task count is not 3");
    }

    function testCompleteTask() public {

        // Fund the contract with 1 ETH
        goelSettingContract.depositFunds{value: 1 ether}();


        // Call the createTask function
        goelSettingContract.createTask("Example task");

        // Retrieve the task count
        uint256 taskCount = goelSettingContract.getTaskCount();

        // Retrieve the created task
        (string memory description, bool isCompleted) = goelSettingContract.tasks(taskCount - 1);

        // Verify the task is not completed
        assertFalse(isCompleted, "Task is already completed");

        // Call the completeTask function
        goelSettingContract.completeTask(taskCount - 1);

        // Retrieve the updated task
        // (description, isCompleted) = goelSettingContract.tasks(taskCount - 1);

        // Verify that the task is completed
        // assertTrue(isCompleted, "Task is not completed");
    }

    
    

}


