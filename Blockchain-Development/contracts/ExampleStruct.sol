//SPDX-License-Identifier: MIT

pragma solidity 0.8.15;

contract Wallet {
    struct PaymentReceivedStruct {
        address from;
        uint amount;
    }

    PaymentReceivedStruct public payment;

    function payContract() public payable {
        payment = PaymentReceivedStruct(msg.sender, msg.value); //this line indicate the menaing of line below calling the struct and acessing value
        // payment.from = from;
        // payment.amout = amount;
    }
}