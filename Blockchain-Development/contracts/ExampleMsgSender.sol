//SPDX-License-Identifier: MIT
pragma solidity 0.8.14;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";
contract ExampleMsgSender {

    address public myAddress;

    function setMyAddress() public {
        myAddress = msg.sender; // msg.sender address is the user's account address who is interacting with the contract.
    }
}