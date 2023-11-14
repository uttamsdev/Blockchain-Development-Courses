//SPDX-License-Identifier: MIT

pragma solidity 0.8.14;

contract SmartMoney {
    
    uint public balanceReceived;
    function deposit() public payable {
        balanceReceived += msg.value;
    }

    function getContractBalance() public view returns(uint){
        return address(this).balance; //address.this.balcne return the balance of the addresss
    }

    function withdrawALL() public {
        address payable to = payable(msg.sender);
        to.transfer(getContractBalance());
    }

    function withdrawToAddress(address payable to) public {
        to.transfer(getContractBalance());
    }
}