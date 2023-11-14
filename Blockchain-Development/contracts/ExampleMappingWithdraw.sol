//SPDX-License-Identifier: MIT

pragma solidity ^0.8.14;

contract ExampleMappingWithdraws {

    mapping(address => uint) balanceReceived;
    function sendMoney() public payable {
        //this function send money to smart contract automatically
        balanceReceived[msg.sender] += msg.value;
    }

    function getBalance() public view returns(uint) {
        return address(this).balance; //checking balance of smart contract balance;
    }

    function withdrawAllMoney(address payable _to) public {
        // _to.transfer(getBalance());
        uint balacneToSendOut = balanceReceived[msg.sender];
        balanceReceived[msg.sender] = 0;
        _to.transfer(balacneToSendOut);
    }
}