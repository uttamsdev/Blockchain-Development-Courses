//SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract viewPure{
    int data = 10;

    function getData() public  view returns(int){
        return data;
    }
     function getData2(int a, int b) public  pure returns(int){
        return a+b;
    }
}