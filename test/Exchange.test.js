const DogToken = artifacts.require("DogToken");
const SheepToken = artifacts.require("SheepToken");
const PigToken = artifacts.require("PigToken");


require('chai')
	.use(require('chai-as-promised'))
	.should()

function tokens(n) {
	return web3.utils.toWei(n, 'ether');
}

contract('Exchange', (accounts) => {
	let dogToken;
	let sheepToken;
	let pigToken;

	before(async () => {
		dogToken = await DogToken.new();
		sheepToken = await SheepToken.new();
		pigToken = await PigToken.new();
		await dogToken.transfer('0xc180F90Ff4bc68E9Af90a5F933eE08dee3d50C99', tokens('1000000'));
		await sheepToken.transfer('0xcD3930210439Ad7Fc057455E72C6b9e7eDeb0Bca', tokens('1000000'));
		await pigToken.transfer('0xA880b18574e51d6A56486F6Dce28ef91a8A9a778', tokens('1000000'));
	})	


	describe('Dog Token Deployment', async () => {
		it('Contract has a name', async () => {
			const dogTokenName = await dogToken.name()
			assert.equal(dogTokenName, 'Dog Token');
		})
	})

	describe('Sheep Token Deployment', async () => {
		it('Contract has a name', async () => {
			const sheepTokenName = await sheepToken.name()
			assert.equal(sheepTokenName, 'Sheep Token');
		})
	})

	describe('Pig Token Deployment', async () => {
		it('Contract has a name', async () => {
			const pigTokenName = await pigToken.name()
			assert.equal(pigTokenName, 'Pig Token');
		})
	})

	describe('Tokens transfered', async () => {
		it('Dog Tokens transfered', async () => {
			const dogTokenBalance = await dogToken.balanceOf('0xc180F90Ff4bc68E9Af90a5F933eE08dee3d50C99');
			assert.equal(dogTokenBalance.toString(), tokens('1000000'));
		})
	})	

	describe('Tokens transfered', async () => {
		it('Sheep Tokens transfered', async () => {
			const sheepTokenBalance = await sheepToken.balanceOf('0xcD3930210439Ad7Fc057455E72C6b9e7eDeb0Bca');
			assert.equal(sheepTokenBalance.toString(), tokens('1000000'));
		})
	})	

	describe('Tokens transfered', async () => {
		it('Pig Tokens transfered', async () => {
			const pigTokenBalance = await pigToken.balanceOf('0xA880b18574e51d6A56486F6Dce28ef91a8A9a778');
			assert.equal(pigTokenBalance.toString(), tokens('1000000'));
		})
	})	
})
