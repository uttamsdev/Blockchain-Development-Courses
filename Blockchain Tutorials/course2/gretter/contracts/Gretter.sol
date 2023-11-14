//SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

contract Greeter {
    string greeting;

    function greeter(string memory _greeting) public {
        greeting = _greeting;
    }

    function greet()  public view returns(string memory) {
        return greeting;
    }
}