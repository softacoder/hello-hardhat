const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyContract", function () {
  it("should return a correct name and symbol", async function () {
    const MyContract = await hre.ethers.getContractFactory("MyContract");

    const myContractDeployed = await MyContract.deploy("MyContractName", "MCN");

    await myContractDeployed.deployed();

    expect(await myContractDeployed.name()).to.equal("MyContractName");
    expect(await myContractDeployed.symbol()).to.equal("MCN");
  });
});
