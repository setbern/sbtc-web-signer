import { useState } from "react";
import { people } from "../../pages";
import {
  SIGNER_TX_DATA,
  TX_CHAIN_TYPE,
  TX_KIND,
  VOTE_MECHANISM,
} from "../atoms/atomTypes";
import { classNames, displayAddy } from "../const/util";
import { useAtomValue } from "jotai";
import { signerTxDataAtom } from "../atoms";
import { capitalCase, sentenceCase } from "change-case";
import TxDetail from "./TxDetail";

export const tabs = [
  { name: "All", type: TX_KIND.none },
  { name: "Deposit", type: TX_KIND.DepositReveal },
  { name: "Withdrawal Reveal", type: TX_KIND.WithdrawalReveal },
  { name: "Withdrawal Fulfill", type: TX_KIND.WithdrawalFulfill },
  { name: "Handoff", type: TX_KIND.WalletHandoff },
];

const TransactionHistory = () => {
  const [txTypeFilter, setTxType] = useState<TX_KIND>(TX_KIND.none);
  const [open, setOpen] = useState(false);

  const [selectedTx, setSelectedTx] = useState<null | SIGNER_TX_DATA>(null);

  const signerData = useAtomValue(signerTxDataAtom);

  const handleTxClick = (tx: SIGNER_TX_DATA) => {
    setSelectedTx(tx);
    setOpen(true);
  };
  const renderTxs = () => {
    const tableData = signerData
      .filter((tx) => {
        if (txTypeFilter === TX_KIND.none) {
          return true;
        } else if (txTypeFilter === TX_KIND.DepositReveal) {
          return tx.transaction.transaction_kind === TX_KIND.DepositReveal;
        } else if (txTypeFilter === TX_KIND.WithdrawalReveal) {
          return tx.transaction.transaction_kind === TX_KIND.WithdrawalReveal;
        } else if (txTypeFilter === TX_KIND.WithdrawalFulfill) {
          return tx.transaction.transaction_kind === TX_KIND.WithdrawalFulfill;
        } else if (txTypeFilter === TX_KIND.WalletHandoff) {
          return tx.transaction.transaction_kind === TX_KIND.WalletHandoff;
        } else {
          return true;
        }
      })
      .sort((a, b) => {
        // sort by block height
        // if block height is null should be at the top
        if (a.transaction.transaction_block_height === null) {
          return -1;
        }
        if (b.transaction.transaction_block_height === null) {
          return 1;
        }

        return (
          b.transaction.transaction_block_height -
          a.transaction.transaction_block_height
        );
      });

    return tableData.map((tx) => {
      return (
        <tr key={tx.transaction.txid}>
          <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm font-medium text-white ">
            {capitalCase(tx.transaction.transaction_kind)}
          </td>
          <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
            <div className="font-medium text-white ">
              {`${tx.vote_tally.current_consensus} / 350 (${
                ((tx.vote_tally.current_consensus / 350) * 100).toFixed(
                  1
                ) as any
              }%)`}
            </div>
          </td>

          <td className="whitespace-nowrap px-3 py-5 text-sm text-white ">
            <div className="text-white ">
              {displayAddy(tx.transaction.transaction_credit_address.address)}
            </div>
          </td>
          <td className="whitespace-nowrap px-3 py-5 text-sm text-white ">
            <div className="text-white ">
              {tx.transaction.transaction_amount}
              {tx.transaction.transaction_credit_address.type ===
              TX_CHAIN_TYPE.STACKS
                ? " sBTC"
                : " BTC"}
            </div>
          </td>
          <td className="whitespace-nowrap px-3 py-5 text-sm text-white ">
            {tx.vote_mechanism === VOTE_MECHANISM.auto ? (
              <span className="inline-flex items-center rounded-md bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20">
                Auto Signed
              </span>
            ) : (
              <>
                <span className="inline-flex items-center rounded-md bg-red-400/10 px-2 py-1 text-xs font-medium text-red-400 ring-1 ring-inset ring-red-400/20">
                  Requires Manual Vote
                </span>
              </>
            )}
          </td>
          <td className="whitespace-nowrap px-3 py-5 text-sm text-white ">
            {tx.transaction.transaction_block_height}
          </td>
          <td
            onClick={() => handleTxClick(tx)}
            className="relative cursor-pointer whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0"
          >
            <a className="text-secondary hover:text-secondary-dark">
              View<span className="sr-only">, {tx.transaction.txid}</span>
            </a>
          </td>
        </tr>
      );
    });
  };
  return (
    <>
      <TxDetail txDetail={selectedTx} open={open} setOpen={setOpen} />

      <div className="mx-auto max-w-7xl  pt-20 pb-12 px-4  sm:px-6 lg:px-8">
        <div className="  border-[#616161] border-b-0 rounded-t-2xl border bg-[#121212] ">
          <div className="sm:flex justify-between px-10 sm:items-baseline pt-16 ">
            <h1 className="text-2xl md:text-4xl    font-semibold leading-6 text-white">
              Transactions
            </h1>
            <div className="mt-4 sm:ml-10 sm:mt-0">
              <nav className="-mb-px flex space-x-8">
                {tabs.map((tab) => (
                  <a
                    key={tab.name}
                    onClick={() => setTxType(tab.type)}
                    className={classNames(
                      txTypeFilter === tab.type
                        ? "border-secondary text-secondary"
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                      "whitespace-nowrap border-b-2 px-1 pb-4 text-sm cursor-pointer font-medium"
                    )}
                    aria-current={
                      txTypeFilter === tab.type ? "page" : undefined
                    }
                  >
                    {tab.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className="flow-root  border-[#616161] border-t-0 rounded-b-2xl border bg-[#121212] px-4">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-12">
              <table className="min-w-full divide-y  divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-md font-semibold text-white "
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-md font-semibold text-white sm:pl-0"
                    >
                      Consensus
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-md font-semibold text-white "
                    >
                      Sender
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-md font-semibold text-white "
                    >
                      Amount
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-md font-semibold text-white "
                    >
                      Signer Vote (Auto/Manual)
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-md font-semibold text-white "
                    >
                      Block #
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                    >
                      <span className="sr-only">View</span>
                    </th>
                  </tr>
                </thead>
                <tbody className=" ">{renderTxs()}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionHistory;
