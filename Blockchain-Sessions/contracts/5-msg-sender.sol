//SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract MsgSender {
    address public myAddress;

    
    function setMyAddress() public {
        myAddress = msg.sender;
    }
}