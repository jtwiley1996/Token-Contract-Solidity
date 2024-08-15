const MyToken = artifacts.require("MyToken");

contract("MyToken", (accounts) => {
  let myToken;

  before(async () => {
    myToken = await MyToken.deployed();
  });

  it("should deploy and have a name", async () => {
    const name = await myToken.name();
    assert.equal(name, "MyToken", "Token name should be MyToken");
  });

  it("should have an initial supply of 1,000,000", async () => {
    const initialSupply = await myToken.totalSupply();
    const initialSupplyInUnits = initialSupply.toString() / (10 ** 18); // Convert from smallest unit to readable unit
    assert.equal(initialSupplyInUnits, '1000000000000000000000', "Initial supply should be 1e+21"); // Ensure comparison is done correctly
  });
});
