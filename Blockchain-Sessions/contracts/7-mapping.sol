//SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract myMapping{
    mapping(uint => bool) public myMapping;

    function setValue(uint index) public {
        myMapping[index] = true;
    }
}