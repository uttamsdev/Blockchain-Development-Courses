//SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract myFunction {
    uint data;

    function setFunction(uint value) public {
        data = value;
    }

    function getFunction() public view returns(uint) {
        return data;
    }

}