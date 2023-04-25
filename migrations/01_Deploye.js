const   MyToken= artifacts.require("../contracts/MyToken.sol");

module.exports = function(deployer) {
  deployer.deploy(MyToken);
};


// var MyToken = artifacts.require("MyToken");

// module.exports = function(deployer) {
//   deployer.then(async () => {
//     const t = await MyToken.deployed();
//     await t.write(1);
//     console.log('Completed!');
//   });
// };