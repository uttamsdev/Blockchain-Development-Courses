//SPDX-License-Identifier: MIT

pragma solidity ^0.8.16;

contract SendMoney {

    function sendMoneyToContract() public payable {
        //this function send money to smart contract
    }

    function getContractBalance() public view returns(uint){
        return address(this).balance;
    }
    //adress should be payable to transfer or recive money.
    function transferMoneyFromContract(address  payable _to, uint _amount) public {
        require(address(this).balance >= _amount, "Not enough money");
        _to.transfer(_amount);
    }
}