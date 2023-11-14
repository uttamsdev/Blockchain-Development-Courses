//SPDX-License-Identifier: MIT

pragma solidity 0.8.14;

contract ExamplePayable{
    // if we send 1 eth with transaction only then string will be updated. 

    string public myString = "Hello world";

    function updateString(string memory _newString) public payable { //payable modifer allowe to recieve eth
        if(msg.value == 1 ether){
            myString = _newString;
        } else{
            payable(msg.sender).transfer(msg.value);// user jodi 1 ether send na kore 1 gwei send kore transaction hocce ebong tar gwei kete jacche 
            //se jonno se gwei tar access e back korte dicche ba transfer kore dicchi. ba 1 eth er kom ba besi dileo se eth back kore dibe user k
        }
    }
}