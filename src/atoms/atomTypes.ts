export interface SIGNER_TX_DATA {
  transaction: TRANSACTION;
  vote_choice: VOTE_CHOICE;
  vote_mechanism: VOTE_MECHANISM;
  vote_tally: VOTE_TALLY;
}

export interface TX_ADDRESS {
  address: string;
  type: TX_CHAIN_TYPE;
}

export interface TRANSACTION {
  memo: string;
  transaction_amount: number;
  transaction_block_height: number | null;
  transaction_credit_address: TX_ADDRESS;
  transaction_deadline_block_height: number;
  transaction_debit_address: TX_ADDRESS;
  transaction_fees: number;
  transaction_kind: TX_KIND;
  transaction_originator_address: TX_ADDRESS;
  txid: string;
}

export interface VOTE_TALLY {
  current_consensus: number;
  target_consensus: number;
  vote_status: string;
}
export enum TX_CHAIN_TYPE {
  BITCOIN = "BITCOIN",
  STACKS = "STACKS",
}

export enum TX_KIND {
  none = "none",
  DepositReveal = "DepositReveal",
  WithdrawalReveal = "WithdrawalReveal",
  WithdrawalFulfill = "WithdrawalFulfill",
  WalletHandoff = "WalletHandoff",
}

export enum VOTE_CHOICE {
  approve = "approve",
  reject = "reject",
}
export enum VOTE_MECHANISM {
  auto = "auto",
  manual = "manual",
}
