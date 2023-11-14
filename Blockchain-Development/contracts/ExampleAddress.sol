//SPDX-License-Identifier: MIT
pragma solidity 0.8.14;

contract ExampleAddress {
    address public someAddress;

    function setSomeAddress(address _someAddress) public {
        someAddress = _someAddress;
    }

    function getAddressBalance() public view returns(uint){
        return someAddress.balance;
    }
}