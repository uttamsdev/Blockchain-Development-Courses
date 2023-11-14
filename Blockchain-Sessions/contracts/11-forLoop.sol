//SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract forLoop {
    int public sum;
    int i = 100;
    function calculate() public {
        // for(int i = 1; i <= 100; i++){
        //     sum+= i;
        // }

        while(i != 0) {
            sum+= i;
            i--;
        }
    }
}