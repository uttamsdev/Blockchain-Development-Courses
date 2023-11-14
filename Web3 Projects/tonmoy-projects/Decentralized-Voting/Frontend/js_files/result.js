//initialize Moralis on RRRinkeby
const serverUrl = "https://mrhyy1if02wl.usemoralis.com:2053/server";
const appId = "AuH19PpSEOGZ1g2U08nV6tnNvgTkDMzaS8VqvjyI";
Moralis.start({ serverUrl, appId });
//

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
// logout
async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");
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

// result status
async function getResultState() {
  const options = {
    chain: CHAIN, //update
    address: CONTRACTADDRESS, //update
    function_name: "getResultState", //check
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

//DISPLAY THE CANDIDATES ON THE SCREEN
//DISPLAY THE CANDIDATES ON THE SCREEN
//DISPLAY THE CANDIDATES ON THE SCREEN

//NOTE DISPLAY JUST CANDIDATE NAME, CANDIDATE ID AND A FAKE IMAGE
displayCandidatesOnScreen();
async function displayCandidatesOnScreen() {
  const candidatesArray = await getListOfCandidates(); //this stores the candidates list inside the variable
  //you can console.log it to view the array
  console.log(candidatesArray);
  console.log("candidatesArray length is: ", candidatesArray.length);

  //@abiola start from here
  candidatesArray.length && loopCandidate(candidatesArray);
  candidatesArray.length && loopTable(candidatesArray);
  candidatesArray.length && Winner(candidatesArray);
}

// Display the candidates on the screen
function loopCandidate(array) {
  document.getElementById("result list").innerHTML = array
    .map(
      (candidate) =>
        `<div class="cursor-pointer rounded-sm">
      <img src="https://img.freepik.com/free-photo/3d-rendering-male-character-profile-with-cream-hat-orange-polo-shirt-good-character-profile_477250-61.jpg?size=338&ext=jpg&ga=GA1.1.1906834557.1622206067" alt="voters image" class="h-52 w-52">
      <div class="bg-zinc-700 text-center w-52">
      <h1 class="text-lg font-bold">ID: ${candidate[0]}</h1>
      <p class="font-sans font-light">Name: ${candidate[1]}</p>
      </div>
      </div>
      `
    )
    .join("");
}
function loopTable(array) {
  document.getElementById("count-result").innerHTML = array
    .map(
      (candidate) =>
        `
        <tr>
          <th scope="row">${candidate[0]}</th>
          <td>${candidate[1]}</td>
          <td>${candidate[2]}</td>
          <td>${candidate[3]}</td>
          <td>${candidate[4]}</td>
          <td>${candidate[5]}</td>
          <td>${candidate[6]}</td>
          <td>${candidate[7]}</td>
      </tr>
      `
    )
    .join("");
}

// return user to homepage if result is not active
async function notActive() {
  let result = await getResultState();

  if (result == false) {
    function secondsCounter() {
      let count = 0;
      let counter = setInterval(() => {
        count++;
        console.log("count: ", count);
        document.getElementById("modal").classList.replace("hidden", "grid");
        document.getElementById(
          "modal-header"
        ).innerHTML = `Result is not active`;
        document.getElementById("modal-header").innerHTML =
          "Result is not active";
        document.getElementById(
          "modal-body"
        ).innerHTML = `You will be redirected back to homepage in ${count} seconds checkback later when result are opened`;

        if (count === 5) {
          document.getElementById(
            "modal-body"
          ).innerHTML = `redirecting to homepage`;

          clearInterval(1);
        }
      }, 1000);
      return counter;
    }
    secondsCounter();

    setTimeout(() => {
      window.location.replace("../index.html");
    }, 5000);
  }
}
notActive();

// handle winner cancel button selection
document.getElementById("cancle-btn").onclick = function (e) {
  // console.log(e)
  console.log("cancle-btn clicked");
  document
    .getElementById("winner-notification")
    .classList.replace("grid", "hidden");
};

if (getStateData("resultStatus") == true) {
  document
    .getElementById("winner-notification")
    .classList.replace("hidden", "grid");
}

function Winner(list) {
  const winner = list.reduce((a, b) => (a[3] > b[3] ? a : b));
  document.getElementById("winner-name").innerHTML = winner[1];
}

console.info("result");
