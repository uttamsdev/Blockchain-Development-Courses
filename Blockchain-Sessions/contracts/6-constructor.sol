//SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract Constructor{
    address public owner;

    constructor(){
        owner = msg.sender;
    }
}