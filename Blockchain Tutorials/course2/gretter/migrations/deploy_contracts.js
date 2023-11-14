var Greeter = artifacts.require("./Greeter.sol");

export default function(deployer) {
    deployer.deploy(Greeter);
};