const descriptionHash = ethers.utils.id('Proposal #1: Give grant to team');

await governor.queue(
  [tokenAddress],
  [0],
  [transferCalldata],
  descriptionHash,
);