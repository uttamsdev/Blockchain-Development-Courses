//SPDX-License-Identifier: MIT

pragma solidity 0.8.14;

contract ExampleConstructor {

    address public myAddress;

    //constructors run automatically only for once.
    constructor(address _someAddress) {
        myAddress = _someAddress;
    }

    function setMyAddress(address _myAddress) public {
        myAddress = _myAddress;
    }
    function setMyAddressToMsgSender() public {
        myAddress = msg.sender;
    }

}