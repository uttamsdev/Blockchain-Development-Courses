//SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract Structure{
    struct Payment{
        address from;
        uint amount;
    }

    Payment public payment;

    function payContract() public {
        payment.amount = 100;
        payment.from = msg.sender;
    }
}