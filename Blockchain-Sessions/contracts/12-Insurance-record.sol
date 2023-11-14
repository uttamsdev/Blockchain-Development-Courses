//SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract InsuracneRecord{
    address owner;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner{
        require(msg.sender == owner, "You are not owner");
        _;
    }

    struct Records{
        address to;
        string name;
        uint amount;
    }

    Records[] private records;
    mapping(address => Records[]) recordsMap;

    function addRecord(address to, string memory name, uint amount) public onlyOwner {
        records.push(
            Records(to,name,amount)
        );
        recordsMap[to].push(
            Records(to,name,amount)
        );
    }


    function getAllRecords() public onlyOwner view returns(Records[] memory) {
        return records;
    }

    function getRecordsByAddress() public view returns(Records[] memory){
        return recordsMap[msg.sender];
    }

}