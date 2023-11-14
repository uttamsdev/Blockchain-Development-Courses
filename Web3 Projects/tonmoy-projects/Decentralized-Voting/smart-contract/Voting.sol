// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract SimpleVoting {
    address public chairman;
    ///  mapping to lookup address in the stakeholder struct
    mapping(address => Stakeholder) public stakeholders;

    /// an array of all the stakeholder addresses
    address[] public stakeholdersList;

    /// an array of all the board of directors addresses
    address[] public BODList;

    /// an array of all the teachers addresses by the chairman
    address[] public teachersList;

    /// an array of all the students addresses registered by the chairman
    address[] public studentList; //holds list of all students registered by the Chairman

    ///  an enum to represent the possible roles an address can take.
    enum Role {
        BOD,
        TEACHER,
        STUDENT,
        CHAIRMAN
    }

    Stakeholder[] public stakeholderObject;

    /// @dev a struct to store the details of each stakeholder
    struct Stakeholder {
        Role role;
        bool hasVoted;
        uint256 candidateChosen;
        address registeredAddress;
        address stakeholderAddress;
    }

    /// @dev an array of all the candidates
    Candidate[] public candidatesList;

    /// @dev a struct to store the details of each candidate
    struct Candidate {
        uint256 candidateID;
        string candidateName;
        address registeredAddress;
        uint8 totalVotesReceived;
        uint8 votesReceivedBOD;
        uint8 votesReceivedTeachers;
        uint8 votesReceivedStudents;
        bool receivedChairmansVote;
    }

    /// a boolean to show if voting is active or not
    bool public votingActive;

    /// a boolean to show if the results is public or not
    bool public resultsActive;

    /****************************************
    EVENTS
    *****************************************/

    /// this event is emitted when an stakeholder is created.
    event CreateStakeholder(string message, address _address, uint256 _role);

    /// this event is emitted when multiple stakeholders are created.
    event CreateMultipleStakeHolders(string message, uint256 _role);

    /// this event is emitted when a candidate is created.
    event CreateCandidate(string message);

    /// this event is emitted when a candidate is voted for
    event Vote(string message);

    ///  a constructor to do some initializations at deployment
    constructor() {
        chairman = msg.sender;
        votingActive = false;
        resultsActive = false;
        createStakeHolder(msg.sender, 3); //add the chairperson as a stakeholder
        BODList.push(msg.sender); //add the chairperson to the BOD LIST
    }

    //new function to allow chairman transfer his rights
    function transferChairman(address _address) public onlyByChairman {
        require(isABOD(_address), "Only BODs can be a chairman");
        chairman = _address;
        stakeholders[_address].role = Role(3); //change role of new chairman
        stakeholders[msg.sender].role = Role(0); //change role of old chairman
    }

    function getCurrentChairmanAddress() public view returns (address) {
        return chairman;
    }

    /// initialize the stakeholders mapping to roles and push them into their respective arrays
    function createStakeHolder(address _address, uint256 _role)
        public
        onlyByChairman
    {
        require(
            !isAStakeholder(_address),
            "This address is already registered"
        );
        //add stakeholders to the mapping
        stakeholders[_address] = Stakeholder(
            Role(_role),
            false,
            8,
            msg.sender,
            _address
        );
        //add stakeholders to the array that holds all structs of stakeholders
        stakeholderObject.push(stakeholders[_address]);
        // add stakeholder's adress to the list of stakeHolders addresses
        stakeholdersList.push(_address);
        //add stakeholder's adress to the corresponding list based on roles
        if (stakeholders[_address].role == Role(0)) {
            BODList.push(_address);
        }
        if (stakeholders[_address].role == Role(1)) {
            teachersList.push(_address);
        }
        if (stakeholders[_address].role == Role(2)) {
            studentList.push(_address);
        }

        emit CreateStakeholder(
            "You just created a stakeholder",
            _address,
            _role
        );
    }

    ///  use a loop to add an array of addresses into respective roles
    function createMultipleStakeHolders(
        address[] memory _addressArray,
        uint256 _role
    ) public onlyByChairman {
        for (uint256 i = 0; i < _addressArray.length; i++) {
            createStakeHolder(_addressArray[i], _role);
        }

        emit CreateMultipleStakeHolders(
            "You just created multiple stakeholders",
            _role
        );
    }

    /// @dev use a for loop to run the address through the array of stakeholder's list
    function isAStakeholder(address _address) public view returns (bool) {
        for (uint8 i = 0; i < stakeholdersList.length; i++) {
            if (_address == stakeholdersList[i]) {
                return true;
            }
        }
        return false;
    }

    function isABOD(address _address) public view returns (bool) {
        for (uint8 i = 0; i < BODList.length; i++) {
            if (_address == BODList[i]) {
                return true;
            }
        }
        return false;
    }

    ///  create a candidate
    function createCandidate(string memory _candidateName)
        public
        onlyByChairman
    {
        uint256 candidateID;
        if (candidatesList.length == 0) {
            candidateID = 0;
        } else {
            candidateID = candidatesList.length;
        }
        // bytes memory candidateName = toBytes(_candidateName);
        candidatesList.push(
            Candidate(
                candidateID,
                _candidateName,
                msg.sender,
                0,
                0,
                0,
                0,
                false
            )
        );
        emit CreateCandidate("You just added a new candidate");
    }

    ///  a function to get list of candidates
    function getListOfCandidates() public view returns (Candidate[] memory) {
        return candidatesList;
    }

    /// a function to get list of stakeholders
    function getListOfStakeHolders() public view returns (address[] memory) {
        return stakeholdersList;
    }

    function getListOfStakeHoldersObjects()
        public
        view
        returns (Stakeholder[] memory)
    {
        return stakeholderObject;
    }

    /// a function to get list of teachers
    function getListOfTeachers() public view returns (address[] memory) {
        return teachersList;
    }

    /// @notice get list of students
    /// @dev a function to get list of students
    /// @return address[] returns an array of addresses
    function getListOfStudents() public view returns (address[] memory) {
        return studentList;
    }

    /// @notice get list of BODS
    /// @dev a function to get list of the BODS
    /// @return address[] returns an array of addresses
    function getListOfBOD() public view returns (address[] memory) {
        return BODList;
    }

    /// @notice convert a string to bytes
    /// @dev a function to convert a string to bytes
    /// @return bytes returns an a byte format of the string that was converted
    function toBytes(string memory _name) public pure returns (bytes memory) {
        return abi.encodePacked(_name);
    }

    /****************************************
    TOGGLE VOTING/RESULTS ON AND OFF
    *****************************************/

    /// @notice toggle voting status
    /// @dev a function to toggle voting status, can only be called by the chairman
    /// @return bool returns a boolean
    function toggleVoting() public onlyByChairman returns (bool) {
        if (votingActive) {
            votingActive = false;
            return votingActive;
        } else {
            votingActive = true;
            return votingActive;
        }
    }

    /// @notice toggle result status
    /// @dev a function to toggle result status, can only be called by the chairman
    /// @return bool returns a boolean
    function toggleResult() public onlyByChairman returns (bool) {
        if (resultsActive) {
            resultsActive = false;
            return resultsActive;
        } else {
            resultsActive = true;
            return resultsActive;
        }
    }

    /****************************************
    GET THE STATE OF VOTING AND RESULTS ACTIVE
    *****************************************/
    function getVotingState() public view returns (bool) {
        return votingActive;
    }

    function getResultState() public view returns (bool) {
        return resultsActive;
    }

    /****************************************
    ENABLE A STAKEHOLDER TO VOTE
    *****************************************/

    /// @notice vote for a candidate
    /// @dev a function to vote a candidate
    /// @param _candidateID The id of the candidate you want to vote for
    function vote(uint256 _candidateID) public onlyStakeHolders {
        require(
            stakeholders[msg.sender].hasVoted == false,
            "You have voted before"
        );
        require(votingActive == true, "Voting Session is not active");
        stakeholders[msg.sender].hasVoted = true; //mark that this stakeholder has voted
        stakeholders[msg.sender].candidateChosen = _candidateID; //store who this stakeholder voted for

        candidatesList[_candidateID].totalVotesReceived =
            candidatesList[_candidateID].totalVotesReceived +
            1;

        if (stakeholders[msg.sender].role == Role(0)) {
            candidatesList[_candidateID].votesReceivedBOD =
                candidatesList[_candidateID].votesReceivedBOD +
                1;
        }
        if (stakeholders[msg.sender].role == Role(1)) {
            candidatesList[_candidateID].votesReceivedTeachers =
                candidatesList[_candidateID].votesReceivedTeachers +
                1;
        }
        if (stakeholders[msg.sender].role == Role(2)) {
            candidatesList[_candidateID].votesReceivedStudents =
                candidatesList[_candidateID].votesReceivedStudents +
                1;
        }
        if (msg.sender == chairman) {
            candidatesList[_candidateID].receivedChairmansVote = true;
        }

        emit Vote("You just voted a candidate");
    }

    /****************************************
    MODIFIERS
    *****************************************/

    /// @notice a restriction for functions that can only be called by the chairman
    /// @dev a modifier to restrict access to functions so only the chairman can call them
    modifier onlyByChairman() {
        require(msg.sender == chairman, "Only Chairman can do this.");
        _;
    }

    /// @notice a restriction for functions that can only be called by stakeholders
    /// @dev a modifier to restrict access to functions so only the stakeholders can call them
    modifier onlyStakeHolders() {
        require(isAStakeholder(msg.sender), "Is not registered to vote");
        _;
    }
}
