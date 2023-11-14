//SPDX-License-Identifier: MIT

pragma solidity ^0.8.16;

contract TestWeb3{
    
    uint public myUint = 10;

    function setmyUint(uint _newUint) public {
        myUint = _newUint;
    }
}