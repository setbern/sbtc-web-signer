import { useEffect, useState } from "react";
import TxDetail from "./TxDetail";
import DashboardStats from "./DashboardStats";
import { classNames } from "../const/util";
import TransactionHistory from "./TransactionHistory";
import { useAtom } from "jotai";
import { signerTxDataAtom } from "../atoms";
import {
  SIGNER_TX_DATA,
  TRANSACTION,
  TX_CHAIN_TYPE,
  TX_KIND,
  VOTE_CHOICE,
  VOTE_MECHANISM,
} from "../atoms/atomTypes";

const HomeDashboard = () => {
  const [open, setOpen] = useState(false);

  const [dateRangeFilter, setDateRange] = useState(0);
  const [signerTxData, setSignerTxData] = useAtom(signerTxDataAtom); // [

  console.log(signerTxData);
  /* 
    0 = last 7 days
    1 = last 30 days
    2 = all time
  */

  useEffect(() => {
    const txData = localStorage.getItem("signerTxData");
    if (txData) {
      createTxData(5);
    } else {
      createTxData(50);
    }
  }, []);

  const createTxData = (amountToCreate: number) => {
    // create moocked amount of txs
    //create a array of 50 SIGNER_TX_DATA

    const signerTxDataTemp = [];
    for (let i = 0; i < amountToCreate; i++) {
      // need a 50 50 chance of true or false
      const txType = Math.random() >= 0.5 ? true : false;

      let _TX: TRANSACTION | null = null;
      if (txType) {
        // a btc tx
        // since it's a btc tx it can only be a depoist, withdral fulfill or wallet handoff
        // need a 33 33 33 chance of each
        const txKind =
          Math.random() >= 0.66
            ? TX_KIND.DepositReveal
            : Math.random() >= 0.33
            ? TX_KIND.WithdrawalFulfill
            : TX_KIND.WalletHandoff;

        const block = Math.floor(Math.random() * 10000) + 795136;
        const txBare: TRANSACTION = {
          // random crypto related memo generator
          memo: "BTC 0x" + Math.random().toString(16).slice(2),
          transaction_amount: Math.floor(Math.random() * 1000000000000000000),
          // must be a number between 795136 & 795136 + 10000
          transaction_block_height: block,
          transaction_credit_address: {
            // random btc address generator
            address: "bc1" + Math.random().toString(16).slice(2),
            type: TX_CHAIN_TYPE.BITCOIN,
          },
          transaction_deadline_block_height: block + 5,
          transaction_debit_address: {
            // random btc address generator
            address: "bc1" + Math.random().toString(16).slice(2),
            type: TX_CHAIN_TYPE.BITCOIN,
          },
          transaction_fees: Math.floor(Math.random() * 1000000000000000000),
          transaction_kind: txKind,
          transaction_originator_address: {
            // random btc address generator
            address: "bc1" + Math.random().toString(16).slice(2),
            type: TX_CHAIN_TYPE.BITCOIN,
          },
          // randomg bitcoin txid generator
          txid: "0x" + Math.random().toString(16).slice(2),
        };

        _TX = txBare;
        // random 50 50 chance of true or false
      } else {
        const txKind = TX_KIND.WithdrawalReveal;
        const block = Math.floor(Math.random() * 10000) + 110048;
        const txBare: TRANSACTION = {
          // random crypto related memo generator
          memo: "STX 0x" + Math.random().toString(16).slice(2),
          transaction_amount: Math.floor(Math.random() * 1000000000000000000),
          transaction_block_height: block,
          transaction_credit_address: {
            //random stx address generator
            address: "SP" + Math.random().toString(16).slice(2),
            type: TX_CHAIN_TYPE.STACKS,
          },
          transaction_deadline_block_height: block + 5,
          transaction_debit_address: {
            // random btc address generator
            address: "bc1" + Math.random().toString(16).slice(2),
            type: TX_CHAIN_TYPE.BITCOIN,
          },
          transaction_fees: Math.floor(Math.random() * 1000000000000000000),
          transaction_kind: txKind,
          transaction_originator_address: {
            // random stx address generator
            address: "SP" + Math.random().toString(16).slice(2),
            type: TX_CHAIN_TYPE.STACKS,
          },
          // random stx txid generator
          txid: "0x" + Math.random().toString(16).slice(2),
        };
        _TX = txBare;
      }

      const voiceChoice =
        Math.random() >= 0.5 ? VOTE_CHOICE.approve : VOTE_CHOICE.reject;
      const votemech =
        Math.random() >= 0.8 ? VOTE_MECHANISM.manual : VOTE_MECHANISM.auto;
      const voteTally = {
        // number between 0 and 350
        current_consensus: Math.floor(Math.random() * 350),
        // needs to be 70% of 350
        target_consensus: 245,
        vote_status: voiceChoice,
      };

      const signerTxData: SIGNER_TX_DATA = {
        transaction: _TX,
        vote_tally: voteTally,
        vote_mechanism: votemech,
        vote_choice: voiceChoice,
      };

      signerTxDataTemp.push(signerTxData);
    }

    const txData = localStorage.getItem("signerTxData");
    if (txData) {
      const parsedTxData = JSON.parse(txData);
      const updatedList = [...parsedTxData, ...signerTxDataTemp];
      localStorage.setItem("signerTxData", JSON.stringify(updatedList));
      setSignerTxData(updatedList);
      return;
    } else {
      localStorage.setItem("signerTxData", JSON.stringify(signerTxDataTemp));
      const updatedList = [...signerTxData, ...signerTxDataTemp];

      localStorage.setItem("signerTxData", JSON.stringify(updatedList));
      setSignerTxData(updatedList);
    }
  };
  return (
    <>
      <div className="py-5 pt-20 ">
        <div className="mx-auto max-w-7xl px-4 flex flex-wrap justify-end items-center gap-6 sm:flex-nowrap sm:px-6 lg:px-8">
          <div className="order-last flex justify-end w-full gap-x-8 text-sm font-semibold leading-6 sm:order-none sm:w-auto sm:pl-6 sm:leading-7">
            <a
              onClick={() => setDateRange(0)}
              className={classNames(
                dateRangeFilter === 0 ? "text-secondary" : "text-white",
                "cursor-pointer text-lg"
              )}
            >
              Last 7 days
            </a>
            <a
              onClick={() => setDateRange(1)}
              className={classNames(
                dateRangeFilter === 1 ? "text-secondary" : "text-white",
                " text-lg cursor-pointer"
              )}
            >
              Last 30 days
            </a>
            <a
              onClick={() => setDateRange(2)}
              className={classNames(
                dateRangeFilter === 2 ? "text-secondary" : "text-white",
                "cursor-pointer text-lg"
              )}
            >
              All-time
            </a>
          </div>
        </div>
      </div>
      <TxDetail open={open} setOpen={setOpen} />
      <DashboardStats />
      <TransactionHistory />
    </>
  );
};

export default HomeDashboard;
