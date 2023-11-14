//SPDX-License-Identifier: MIT
pragma solidity 0.8.14;

contract ExampleViewPure {
    //difference between view function and pure function
    //view fucntion can access storeAge varibale. can access outside scope variable.
    //but pure function cannot access storeage variable and outside scope variable.
    //reading function should not contain returns(uint/something)


    uint public myStoreageVariable;

    function getMyStoreageVariable () public view returns(uint){
        return myStoreageVariable;
    }

    function setMyStoreVariable(uint _newVariable) public {
        myStoreageVariable = _newVariable;
    } 

    //view fucntion
    function viewFunction(uint a, uint b) public pure returns(uint){
        return a + b;
    }
}