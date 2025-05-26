const tokenAddress = ...;
const token = await ethers.getContractAt('ERC20', tokenAddress);

const teamAddress = ...;
const grantAmount = ...;
const transferCalldata = token.interface.encodeFunctionData(‘transfer’, [teamAddress, grantAmount]);

await governor.propose(
  [tokenAddress],
  [0],
  [transferCalldata],
  'Proposal #1: Give grant to team',
);