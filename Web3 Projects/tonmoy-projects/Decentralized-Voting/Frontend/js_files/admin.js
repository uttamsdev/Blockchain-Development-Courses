//initialize Moralis on RRRinkeby
const serverUrl = "https://mrhyy1if02wl.usemoralis.com:2053/server";
const appId = "AuH19PpSEOGZ1g2U08nV6tnNvgTkDMzaS8VqvjyI";
Moralis.start({ serverUrl, appId });

const ABI = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "CreateCandidate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "message",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_role",
        type: "uint256",
      },
    ],
    name: "CreateMultipleStakeHolders",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "message",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_address",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_role",
        type: "uint256",
      },
    ],
    name: "CreateStakeholder",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "Vote",
    type: "event",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "BODList",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "candidatesList",
    outputs: [
      { internalType: "uint256", name: "candidateID", type: "uint256" },
      { internalType: "string", name: "candidateName", type: "string" },
      { internalType: "address", name: "registeredAddress", type: "address" },
      { internalType: "uint8", name: "totalVotesReceived", type: "uint8" },
      { internalType: "uint8", name: "votesReceivedBOD", type: "uint8" },
      { internalType: "uint8", name: "votesReceivedTeachers", type: "uint8" },
      { internalType: "uint8", name: "votesReceivedStudents", type: "uint8" },
      { internalType: "bool", name: "receivedChairmansVote", type: "bool" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "chairman",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "string", name: "_candidateName", type: "string" },
    ],
    name: "createCandidate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address[]", name: "_addressArray", type: "address[]" },
      { internalType: "uint256", name: "_role", type: "uint256" },
    ],
    name: "createMultipleStakeHolders",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_address", type: "address" },
      { internalType: "uint256", name: "_role", type: "uint256" },
    ],
    name: "createStakeHolder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentChairmanAddress",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getListOfBOD",
    outputs: [{ internalType: "address[]", name: "", type: "address[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getListOfCandidates",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "candidateID", type: "uint256" },
          { internalType: "string", name: "candidateName", type: "string" },
          {
            internalType: "address",
            name: "registeredAddress",
            type: "address",
          },
          { internalType: "uint8", name: "totalVotesReceived", type: "uint8" },
          { internalType: "uint8", name: "votesReceivedBOD", type: "uint8" },
          {
            internalType: "uint8",
            name: "votesReceivedTeachers",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "votesReceivedStudents",
            type: "uint8",
          },
          { internalType: "bool", name: "receivedChairmansVote", type: "bool" },
        ],
        internalType: "struct SimpleVoting.Candidate[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getListOfStakeHolders",
    outputs: [{ internalType: "address[]", name: "", type: "address[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getListOfStakeHoldersObjects",
    outputs: [
      {
        components: [
          {
            internalType: "enum SimpleVoting.Role",
            name: "role",
            type: "uint8",
          },
          { internalType: "bool", name: "hasVoted", type: "bool" },
          { internalType: "uint256", name: "candidateChosen", type: "uint256" },
          {
            internalType: "address",
            name: "registeredAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "stakeholderAddress",
            type: "address",
          },
        ],
        internalType: "struct SimpleVoting.Stakeholder[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getListOfStudents",
    outputs: [{ internalType: "address[]", name: "", type: "address[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getListOfTeachers",
    outputs: [{ internalType: "address[]", name: "", type: "address[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getResultState",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getVotingState",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_address", type: "address" }],
    name: "isABOD",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_address", type: "address" }],
    name: "isAStakeholder",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "resultsActive",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "stakeholderObject",
    outputs: [
      { internalType: "enum SimpleVoting.Role", name: "role", type: "uint8" },
      { internalType: "bool", name: "hasVoted", type: "bool" },
      { internalType: "uint256", name: "candidateChosen", type: "uint256" },
      { internalType: "address", name: "registeredAddress", type: "address" },
      { internalType: "address", name: "stakeholderAddress", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "stakeholders",
    outputs: [
      { internalType: "enum SimpleVoting.Role", name: "role", type: "uint8" },
      { internalType: "bool", name: "hasVoted", type: "bool" },
      { internalType: "uint256", name: "candidateChosen", type: "uint256" },
      { internalType: "address", name: "registeredAddress", type: "address" },
      { internalType: "address", name: "stakeholderAddress", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "stakeholdersList",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "studentList",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "teachersList",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "string", name: "_name", type: "string" }],
    name: "toBytes",
    outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "toggleResult",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "toggleVoting",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_address", type: "address" }],
    name: "transferChairman",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_candidateID", type: "uint256" },
    ],
    name: "vote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "votingActive",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
];
const CHAIN = "rinkeby";
const CONTRACTADDRESS = "0x633d84bF31FDDF3cd6ef82d268059C85cc12386b";
// const CONTRACTADDRESS = "0x251e18258E3FcDF32767AFe05b5398D0e51fA6E9";

async function login() {
  let user = Moralis.User.current();
  if (!user) {
    await Moralis.enableWeb3();
    user = await Moralis.authenticate({
      signingMessage: "Log in using Moralis",
    })
      .then(function (user) {
        console.log("logged in user:", user);
        console.log(user.get("ethAddress"));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");
}

//TOGGLE THE STATUS BAR FOR VOTING STATUS
//TOGGLE THE STATUS BAR FOR VOTING STATUS
//TOGGLE THE STATUS BAR FOR VOTING STATUS
document.getElementById("btn-voting-open").onclick = votingOpen;
document.getElementById("btn-voting-close").onclick = votingClose;

async function votingOpen(e) {
  e.preventDefault();
  await Moralis.authenticate({ signingMessage: "Log in using Moralis" });
  const votingActive = await toggleVoting();
  if (votingActive) {
    displayVotingStatusActive();
    setState("votingStatus", true);
  }
}

function displayVotingStatusActive() {
  document.getElementById("voting-status").style.backgroundColor = "green";
  document.getElementById("votingStatusText").innerHTML = "Voting Active";
  document.getElementById("modal").classList.replace("hidden", "grid");
  document.getElementById("modal-title").innerHTML = "Voting is active";
  document.getElementById("modal-body").innerHTML = "Voting is now active";
}

// vote status
async function getVotingState() {
  const options = {
    chain: CHAIN, //update
    address: CONTRACTADDRESS, //update
    function_name: "getVotingState", //check
    abi: ABI,
  };
  return await Moralis.Web3API.native.runContractFunction(options);
}

votingStatus()
async function votingStatus() {
  let getVote = await getVotingState();
  if (getVote) {
    document.getElementById("voting-status").style.backgroundColor = "green";
    document.getElementById("votingStatusText").innerHTML = "Voting Active";
    console.log("voting active", getVote);
  } else {
    document.getElementById("voting-status").style.backgroundColor = "red";
    document.getElementById("votingStatusText").innerHTML = "Voting Inactive";
    console.log("voting not active", getVote);
  }
}


async function votingClose(e) {
  e.preventDefault();
  await Moralis.enableWeb3();
  const votingActive = await toggleVoting();
  if (votingActive) {
    displayVotingStatusInactive();
    setState("votingStatus", false);
  }
}

function displayVotingStatusInactive() {
  document.getElementById("voting-status").style.backgroundColor = "red";
  document.getElementById("votingStatusText").innerHTML = "Voting Inactive";
  document.getElementById("modal").classList.replace("hidden", "grid");
  document.getElementById("modal-title").innerHTML = "Voting is disabled";
  document.getElementById("modal-body").innerHTML = "Voting is NOT active";
}

async function toggleVoting() {
  const options = {
    chain: CHAIN,
    contractAddress: CONTRACTADDRESS,
    functionName: "toggleVoting",
    abi: ABI,
  };
  return await Moralis.executeFunction(options);
}

//TOGGLE THE STATUS BAR FOR RESULTS STATUS
//TOGGLE THE STATUS BAR FOR RESULTS STATUS
//TOGGLE THE STATUS BAR FOR RESULTS STATUS
document.getElementById("btn-result-open").onclick = resultOpen;
document.getElementById("btn-result-close").onclick = resultClose;

async function resultOpen(e) {
  e.preventDefault();
  await Moralis.enableWeb3();
  const resultsActive = await toggleResult();
  if (resultsActive) {
    displayResultsStatusActive();
    localStorage.removeItem("resultStatus");
    setState("resultStatus", true);
  }
}

function displayResultsStatusActive() {
  document.getElementById("result-status").style.backgroundColor = "green";
  document.getElementById("resultStatusText").innerHTML = "Result Active";
  document.getElementById("modal").classList.replace("hidden", "grid");
  document.getElementById("modal-title").innerHTML = "Result is active";
  document.getElementById("modal-body").innerHTML =
    "Students can now view result of voting";
}

async function getResultState() {
  const options = {
    chain: CHAIN, //update
    address: CONTRACTADDRESS, //update
    function_name: "getResultState", //check
    abi: ABI,
  };
  return await Moralis.Web3API.native.runContractFunction(options);
}

resultState();
async function resultState() {
let getResult = await getResultState();
  if (getResult) {
    document.getElementById("result-status").style.backgroundColor = "green";
    document.getElementById("resultStatusText").innerHTML = "Result Active";
    console.log("result active", getResult);
  } else {
    document.getElementById("result-status").style.backgroundColor = "red";
    document.getElementById("resultStatusText").innerHTML = "Result Inactive";
    console.log("result not active", getResult);
  }
}


async function resultClose(e) {
  e.preventDefault();
  await Moralis.enableWeb3();
  const resultsActive = await toggleResult();
  if (resultsActive) {
    displayResultsStatusInactive();
    localStorage.removeItem("resultStatus");
    setState("resultStatus", false);
  }
}

function displayResultsStatusInactive() {
  document.getElementById("result-status").style.backgroundColor = "red";
  document.getElementById("resultStatusText").innerHTML = "Result Inactive";
  document.getElementById("modal").classList.replace("hidden", "grid");
  document.getElementById("modal-title").innerHTML = "Result is disabled";
  document.getElementById("modal-body").innerHTML =
    "Students cannot view results anymore";
}

async function toggleResult() {
  const options = {
    chain: CHAIN,
    contractAddress: CONTRACTADDRESS,
    functionName: "toggleResult",
    abi: ABI,
  };
  return await Moralis.executeFunction(options);
}

//CREATE A CANDIDATE
document
  .getElementById("btn-addCandidate")
  .addEventListener("click", addCandidate);
async function addCandidate(e) {
  e.preventDefault();
  const name = document.getElementById("input-firstname").value;
  await Moralis.authenticate({ signingMessage: "Log in using Moralis" });
  await createCandidate(name);
  document.getElementById("modal").classList.replace("hidden", "grid");
  document.getElementById("modal-header").innerHTML = "Successful";
  document.getElementById("modal-body").innerHTML =
    "The candidate was successfully added";
  document.getElementById("form-addCandidates").reset();
  // setTimeout(updateStatusBar, 10000); //update status bar with candidate number
}

async function createCandidate(_name) {
  const options = {
    chain: CHAIN,
    contractAddress: CONTRACTADDRESS,
    functionName: "createCandidate",
    abi: ABI,
    params: {
      _candidateName: _name,
    },
  };
  return await Moralis.executeFunction(options);
}

//STATE MANAGEMENT FUNCTIONS
//STATE MANAGEMENT FUNCTIONS
//STATE MANAGEMENT FUNCTIONS

// implementation for keeping state
function setState(key, params) {
  localStorage.setItem(key, JSON.stringify(params)); //setState
  console.log("setState", key, params); //setState
}

function getStateData(params) {
  let getData = localStorage.getItem(params);
  return JSON.parse(getData);
}

//DISPLAY MODAL CLOSING MODAL ON SCREEN
//DISPLAY MODAL CLOSING MODAL ON SCREEN
//DISPLAY MODAL CLOSING MODAL ON SCREEN

document.getElementById("close").onclick = function () {
  document.getElementById("modal").classList.replace("grid", "hidden");
};
document.getElementById("closeBtn").onclick = function () {
  document.getElementById("modal").classList.replace("grid", "hidden");
};

//DISPLAY ADDRES STATE EVEN ON RELOAD
//DISPLAY ADDRES STATE EVEN ON RELOAD
//DISPLAY ADDRES STATE EVEN ON RELOAD
//@abiola
if (getStateData("account")) {
  document.getElementById("wallet-address").innerHTML = getStateData("account");
}

//DISPLAY AND UPDATE STATUS BAR
//DISPLAY AND UPDATE STATUS BAR
//DISPLAY AND UPDATE STATUS BAR

updateStatusBar();

async function updateStatusBar() {
  const candidatesArray = await getListOfCandidates();
  const BODArray = await getListOfBOD();
  const teachersArray = await getListOfTeachers();
  const studentsArray = await getListOfStudents();

  // console.log(candidatesArray.length);
  document.getElementById(
    "candidateCount"
  ).innerHTML = `Candidate: ${candidatesArray.length}`;
  document.getElementById(
    "BODCount"
  ).innerHTML = `Board of directors: ${BODArray.length}`;
  document.getElementById(
    "studentCount"
  ).innerHTML = `Students: ${studentsArray.length}`;
  document.getElementById(
    "teacherCount"
  ).innerHTML = `Teachers: ${teachersArray.length}`;
}

async function getListOfCandidates() {
  const options = {
    chain: CHAIN, //update
    address: CONTRACTADDRESS, //update
    function_name: "getListOfCandidates", //check
    abi: ABI,
  };
  return await Moralis.Web3API.native.runContractFunction(options);
}

async function getListOfBOD() {
  const options = {
    chain: CHAIN, //update
    address: CONTRACTADDRESS, //update
    function_name: "getListOfBOD", //check
    abi: ABI,
  };
  return await Moralis.Web3API.native.runContractFunction(options);
}

async function getListOfTeachers() {
  const options = {
    chain: CHAIN, //update
    address: CONTRACTADDRESS, //update
    function_name: "getListOfTeachers", //check
    abi: ABI,
  };
  return await Moralis.Web3API.native.runContractFunction(options);
}

async function getListOfStudents() {
  const options = {
    chain: CHAIN, //update
    address: CONTRACTADDRESS, //update
    function_name: "getListOfStudents", //check
    abi: ABI,
  };
  return await Moralis.Web3API.native.runContractFunction(options);
}

//ADD AND CREATE STAKEHOLDERS
//ADD AND CREATE STAKEHOLDERS
//ADD AND CREATE STAKEHOLDERS

document.getElementById("btn-addStakeholder").onclick = addStakeholder;

async function addStakeholder() {
  const address = document.getElementById("input-address").value;
  const role = document.getElementById("roles").value;
  await createStakeHolder(address, role);
  document.getElementById("modal").classList.replace("hidden", "grid");
  document.getElementById("modal-header").innerHTML = "Successful";
  document.getElementById("modal-body").innerHTML = "Stakerholder created";
}

async function createStakeHolder(address, role) {
  await Moralis.authenticate({ signingMessage: "Log in using Moralis" });
  const options = {
    chain: CHAIN,
    contractAddress: CONTRACTADDRESS,
    functionName: "createStakeHolder",
    abi: ABI,
    params: {
      _address: address,
      _role: role,
    },
  };
  return await Moralis.executeFunction(options);
}

//ADD AND CREATE MULTIPLE STAKEHOLDERS
//ADD AND CREATE MULTIPLE STAKEHOLDERS
//ADD AND CREATE MULTIPLE STAKEHOLDERS
//function not properly functioning just yet
// -----------------------------------------------------------------
// document.getElementById("btn-multipleaddStakeholder").onclick =
//   addMultipleStakeholder;

async function addMultipleStakeholder() {
  // const addressesArray = document.getElementById("input-address").value;
  const addressesArray = getStateData("uploadAddress");
  console.log("addressesArray", addressesArray);
  // const addressesArray = `[${addresses}]`;
  const role = document.getElementById("roles").value;
  await createMultipleStakeHolders(addressesArray, role);
  document.getElementById("modal").classList.replace("hidden", "grid");
  document.getElementById("modal-header").innerHTML = "Successful";
  document.getElementById("modal-body").innerHTML = "Stakerholders created";
}

async function createMultipleStakeHolders(addresses, role) {
  await Moralis.authenticate({ signingMessage: "Log in using Moralis" });
  const options = {
    chain: CHAIN,
    contractAddress: CONTRACTADDRESS,
    functionName: "createMultipleStakeHolders",
    abi: ABI,
    params: {
      _addressArray: addresses,
      _role: role,
    },
  };
  return await Moralis.executeFunction(options);
}

// FUNCTIONALITY FOR UPLOADING EXCEL FILE
// CONVERTING TO JSON
// SETTING THE

// select file
let selectedFile;
console.log(window.XLSX);
document
  .getElementById("stakeholder-upload")
  .addEventListener("change", (event) => {
    selectedFile = event.target.files[0];
  });

let data = [
  {
    name: "jayanth",
    data: "scd",
    abc: "sdef",
  },
];

// add multiple stake holders button
document.getElementById("btn-multipleaddStakeholder").onclick =
  uploadStakeHolderFile;

function uploadStakeHolderFile() {
  document
    .getElementById("btn-multipleaddStakeholder")
    .addEventListener("click", () => {
      XLSX.utils.json_to_sheet(data, "out.xlsx");
      if (selectedFile) {
        let fileReader = new FileReader();
        fileReader.readAsBinaryString(selectedFile);
        fileReader.onload = (event) => {
          let data = event.target.result;
          let workbook = XLSX.read(data, { type: "binary" });
          let addressArray = [];
          console.log(workbook);
          workbook.SheetNames.forEach((sheet) => {
            let rowObject = XLSX.utils.sheet_to_row_object_array(
              workbook.Sheets[sheet]
            );
            // remove previous addresses from storage
            localStorage.removeItem("uploadAddress");
            console.info("removing previous upload...");

            console.info("downloading new upload");
            console.log("result of upload", rowObject);
            // pull address and push into an array
            rowObject.forEach((addr) => {
              console.log(addr.address);
              addressArray.push(addr.address);
              setState("uploadAddress", addressArray);
              console.info("upload download completed successfully");
            });
          });
        };
        addMultipleStakeholder();
      }
    });
}

// Display chairman address
async function getChairmanAddress() {
  const options = {
    chain: CHAIN, //update
    address: CONTRACTADDRESS, //update
    function_name: "getCurrentChairmanAddress", //check
    abi: ABI,
  };
  return await Moralis.Web3API.native.runContractFunction(options);
}

async function displayChairmanAddress() {
  const chairmanAddress = await getChairmanAddress();
  document.getElementById("chairman-address").innerHTML = chairmanAddress;
  console.log("current chiarman address", chairmanAddress);
}
displayChairmanAddress();

// Transfer Chairman
document.getElementById("btn-transferChairman").onclick = transferChairman;

async function transferChairman(e) {
  e.preventDefault();
  const newChairmanAddress = document.getElementById(
    "newOwnership-address"
  ).value;
  console.log(newChairmanAddress);
  await transferChairmanAddress(newChairmanAddress);
  document.getElementById("modal").classList.replace("hidden", "grid");
  document.getElementById("modal-header").innerHTML = "Successful";
  document.getElementById("modal-body").innerHTML = "Chairman transferred";
}

async function transferChairmanAddress(newChairmanAddress) {
  await Moralis.authenticate({ signingMessage: "Log in using Moralis" });
  const options = {
    chain: CHAIN,
    contractAddress: CONTRACTADDRESS,
    functionName: "transferChairman",
    abi: ABI,
    params: {
      _address: newChairmanAddress,
    },
  };
  return await Moralis.executeFunction(options);
}
