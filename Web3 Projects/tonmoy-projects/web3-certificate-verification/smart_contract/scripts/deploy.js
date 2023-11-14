const main = async () => {
  const Certificates = await hre.ethers.getContractFactory("Certificate");
  const certificates = await Certificates.deploy();

  await certificates.deployed();
  console.log("Certificates deployed", certificates.address);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}