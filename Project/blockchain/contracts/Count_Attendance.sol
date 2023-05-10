// SPDX-License-Identifier: MIT

// We are using solidity version 0.8.0 and above
pragma solidity ^0.8.0;

// Creating contract with the name Count_Attendance
contract Count_Attendance {
    
    //Mapping the employee address with the boolean value
    mapping(address => bool) employee;

    // Getting a state variable fr total count of employee after attendance
    uint totalCount;

    // Address of a admin who marks employee attendance
    address internal admin;

    //Here constructor is created for admin to be the only person who can mark attendance
    constructor(){
        admin = msg.sender;
    }

    /* Here we have created a function to mark the attendance of the employees
        -We are taking emp argument with type address inside our function
        -Require statement here makes it mandatory that only admin can mark the attendance
        -If emp is present in employee it will mark it as true i.e employee is present
        -If the employee is present we are increasing the employee count i.e total count */
    function markAttendance(address emp) public{
        require(msg.sender == admin);
        employee[emp] = true;
        totalCount += 1;
    }

    // Here we have created a function getTotalCount which will return the final total count of present employees
    function getTotalCount() public view returns(uint){
        return totalCount;
    }
}