//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

contract SimpleStorage {
  mapping(address => Pass[]) passes; 

  struct Pass {
      string first_name;
      string last_name;
  }

  struct Test {
      address to;
      string first_name;
      string last_name;
  }

  Test[] private test;

  function submitPass(address to, string memory firstName, string memory lastName) public {
      passes[to].push(Pass({
          first_name: firstName,
          last_name: lastName
      }));
      test.push(
          Test(to, firstName, lastName)
      );
  }

  function getResponseByAddress() public view returns(Pass[] memory){
      return passes[msg.sender];
  }

  function getAllResponses() public view returns(Test[] memory){
      return test;
  }
}