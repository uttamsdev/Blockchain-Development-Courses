//SPDX-License-Identifier: MIT

pragma solidity 0.8.14;

contract ExampleContract {

    string public myString = "Hello world";

    function updateString(string memory _newString) public {
        myString = _newString;
    }
}