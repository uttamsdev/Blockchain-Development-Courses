// const modalUI = (title, message) => {`
// <div id="modal" class="font-sans hidden place-items-center mx-auto container absolute z-auto w-100 h-100">
//       <div class="bg-zinc-100 rounded shadow-md w-100 lg:w-[40%] md:w-[40%] items-center mt-[20%] text-zinc-900 p-5">
//         <div id="modal-content" class="">
//           <div id="modal-header" class="flex justify-between items-center py-2">
//             <h2 class="modal-title">${title}</h2>
//             <span id="close" class="text-red-600 hover:text-red-500 cursor-pointer" style="font-size: 30px;">&times;</span>
//           </div>
//           <div class="border border-zinc-200 shadow-sm"></div>
//           <div id="modal-body" class="px-3 py-10">
//             <p class="leading-relaxed">${message}</p>
//           </div>
//           <div class="border border-zinc-200 shadow-sm"></div>
//           <div id="modal-footer" class="flex justify-center items-center pt-3">
//             <button href="#close" id="closeBtn" style="font-size: 12px;"
//               class="font-sans text-sm font md:mx-3 py-2 px-7 bg-red-600 hover:bg-red-500 text-white rounded-full cursor-pointer">
//               Close
//             </button>
//           </div>
//         </div>
//       </div>
// </div>
// `};


// // let link = "../src/artifacts/contracts/SimpleVoting.sol/SimpleVoting.json";
// // const fetchAbi = async () => {
// //   const res = await fetch(link);
// //   const json = await res.json();
// //   const abi = json.abi;
// //   console.log("abi: ", abi);
// //   return abi;
// // };
// // const ABI = fetchAbi();
// // console.log(ABI)


// function setState(key, params) {
//     localStorage.setItem(key, JSON.stringify(params)); //setState
//     console.log("setState", key, params); //setState
//   }
  
//   function getStateData(params) {
//     let getData = localStorage.getItem(params);
//     console.log("getStateData", params, getData); //getStateData
//     return JSON.parse(getData);
//   }
//   // if condition to determine UI @abiola
//   if (getStateData("account")) {
//     document.getElementById("wallet-address").innerHTML = getStateData("account");
//   }


//   // const ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"BODList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"candidatesList","outputs":[{"internalType":"uint256","name":"candidateID","type":"uint256"},{"internalType":"string","name":"candidateName","type":"string"},{"internalType":"uint8","name":"votesReceived","type":"uint8"},{"internalType":"address","name":"registeredAddress","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"chairman","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_candidateName","type":"string"}],"name":"createCandidate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"enum SimpleVoting.Role","name":"_role","type":"uint8"}],"name":"createStakeHolder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getListOfCandidates","outputs":[{"components":[{"internalType":"uint256","name":"candidateID","type":"uint256"},{"internalType":"string","name":"candidateName","type":"string"},{"internalType":"uint8","name":"votesReceived","type":"uint8"},{"internalType":"address","name":"registeredAddress","type":"address"}],"internalType":"struct SimpleVoting.Candidate[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"isAStakeholder","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"resultsActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakeholders","outputs":[{"internalType":"enum SimpleVoting.Role","name":"role","type":"uint8"},{"internalType":"bool","name":"voted","type":"bool"},{"internalType":"uint256","name":"candidateChosen","type":"uint256"},{"internalType":"address","name":"registeredAddress","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"stakeholdersList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"studentList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"teachersList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"}],"name":"toBytes","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"toggleResult","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"toggleVoting","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_candidateID","type":"uint256"}],"name":"vote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"votingActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]
// // get abi from link
// // let link = "../src/artifacts/contracts/SimpleVoting.sol/SimpleVoting.json";
// // const fetchAbi = async () => {
// //   const res = await fetch(link);
// //   const json = await res.json();
// //   const abi = json.abi;
// //   console.log("abi: ", abi);
// //   return abi;
// // };
// // const ABI = fetchAbi();

// setInterval(() => {
//   let count = 0
//   console.log("count: ", count + 1);

//   clearInterval(1)
// }, 5000);


// counter()


secondsCounter()

function secondsCounter() {
  let count = 0
  setInterval(() => {
    count++
    console.log("count: ", count + 1);
    if (count === 5) {
      clearInterval(1)
    }
  }, 1000);
}

