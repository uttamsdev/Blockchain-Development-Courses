//SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract contract1{
    address owner;
    int public a = 10;

    constructor() {
        owner = msg.sender;
    }
    
    modifier onlyOwner() {
        require(msg.sender == owner, "You are not owner");
        _;
    }
    modifier test() {
        require(a<=10, "You are not allowed");
        _;
    }
}

contract contract2 is contract1 {
    function callFunction() public onlyOwner test view returns(string memory){
        return "This function is called by owner";
    }
}