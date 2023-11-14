//SPDX-License-Identifier: MIT
pragma solidity 0.8.14;

contract ExampleUnit {
    uint256 public myUint; // range 0 to 2^256-1
    uint8 public unit8; // range 0 - 2^8-1;
    int public myInt = -10; // int can store negative value also. range -2^128 to +2^128-1

    function setUnit(uint _myUint) public {
        myUint = _myUint;
    }

    function increamentMyUint () public {
        myUint++;
    }

    function increamentInt () public {
        myInt++;
    }

}