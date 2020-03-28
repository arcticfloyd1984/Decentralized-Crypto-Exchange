const DogToken = artifacts.require("DogToken");
const SheepToken = artifacts.require("SheepToken");
const PigToken = artifacts.require("PigToken");

module.exports = async function(deployer) {
  await deployer.deploy(DogToken);
  await deployer.deploy(SheepToken);
  await deployer.deploy(PigToken);

  const dogToken = await DogToken.deployed();
  // Dog Token Address: 0x9eD5e46dF7398F2c8Ee6EAA74CDa22eE1790B3dB 
  const sheepToken = await SheepToken.deployed();
  // Sheep Token Address: 0x4113F6e8833Df5Ac60EFEA18C0ccD80C50aCbe9B
  const pigToken = await PigToken.deployed();
  // Pig Token Address: 0x6568A103331d8065aA3c86729ca6A9F640Bc5d40
  
  await dogToken.transfer('0xc180F90Ff4bc68E9Af90a5F933eE08dee3d50C99', '1000000000000000000000000');
  await sheepToken.transfer('0xcD3930210439Ad7Fc057455E72C6b9e7eDeb0Bca', '1000000000000000000000000');
  await pigToken.transfer('0xA880b18574e51d6A56486F6Dce28ef91a8A9a778', '1000000000000000000000000');
};
