//SPDX-License-Identifier: MIT

pragma solidity 0.6.12;

contract ExceptionExample {

    mapping(address => uint) public balanceReceived;

    function receiveMoney() public payable {
        balanceReceived[msg.sender] += msg.value;
    }

    function withdrawMoney(address payable _to, uint _amount) public {
        //  if(_amount <= balanceReceived[msg.sender]) {
        //     balanceReceived[msg.sender] -= _amount;
        //     _to.transfer(_amount);
        // }

        // require diye if er same kaj tai kora hoise but ekhane ektu validation kora hoise. first e smart contract e 100 gwei send korlam then 101 gwei witdraw korbo tahole transaction faild hobe error dibe.. if die korle transaction hobe but withdraw hobe na..
        require(_amount <= balanceReceived[msg.sender], "Not Enough Funds, aborting");

        balanceReceived[msg.sender] -= _amount;
        _to.transfer(_amount);
    }
}
