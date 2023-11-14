//SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract ifElse {
    int public result;

    function calculate(int a, int b) public {
        if( a > b) result = a - b;
        else result = a+b;
    }
}