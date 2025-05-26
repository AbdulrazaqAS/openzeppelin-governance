/*
0x00 means proposal should not exist
  enum ProposalState {
        Pending,  // 0 0x01, b4 vote starts, during votingDelay
        Active,  // 1 0x02
        Canceled,  // 2 0x04
        Defeated,  // 3 0x08
        Succeeded,  // 4 0x10
        Queued,  // 5 0x20
        Expired,  // 6 0x40
        Executed  // 7 0x80
  }
*/

await governor.execute(
  [tokenAddress],
  [0],
  [transferCalldata],
  descriptionHash,
);