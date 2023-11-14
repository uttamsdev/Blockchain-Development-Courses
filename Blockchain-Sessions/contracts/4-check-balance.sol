//SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract BalanceCheck{
    address public someAdress;

    function setSomeAdress(address _someAddress) public {
        someAdress = _someAddress;
    }

    function getAddressBalance() public view returns(uint){
        return someAdress.balance;
    }
}