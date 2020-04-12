const AbcToken = artifacts.require("AbcToken");

module.exports = function(deployer) {
  deployer.deploy(AbcToken);
};
