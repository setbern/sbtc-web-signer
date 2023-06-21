import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  CheckCircleIcon,
  PaperClipIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  SIGNER_TX_DATA,
  TX_CHAIN_TYPE,
  VOTE_CHOICE,
  VOTE_MECHANISM,
} from "../atoms/atomTypes";
import { capitalCase, sentenceCase } from "change-case";
import { signerTxDataAtom } from "../atoms";
import { useAtom } from "jotai";

type txDetail = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: any;
  txDetail: SIGNER_TX_DATA | null;
};

const TxInfoTile = ({
  title,
  value,
  valueUnit,
}: {
  title: string;
  value: string | number;
  valueUnit?: string;
}) => {
  return (
    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
      <dt className="text-sm font-medium leading-6 text-white">{title}</dt>
      <dd className="mt-1 text-sm break-words leading-6 text-gray-400 sm:col-span-2 sm:mt-0">
        {value}
        {valueUnit && <span className="ml-2 text-gray-500">{valueUnit}</span>}
      </dd>
    </div>
  );
};
const TxDetail = ({ setOpen, open, txDetail }: txDetail) => {
  const [signerTxData, setSignerTxData] = useAtom(signerTxDataAtom); // [

  const [show, setShow] = useState(true);

  if (!txDetail) {
    return null;
  }

  const handleVote = (approved: boolean) => {
    // find the tx in the signerTxData
    const latestData = signerTxData.map((tx) => {
      if (tx.transaction.txid === txDetail.transaction.txid) {
        tx.vote_choice = approved ? VOTE_CHOICE.approve : VOTE_CHOICE.reject;
        return tx;
      } else {
        return tx;
      }
    });

    setSignerTxData(latestData);
    setShow(true);
    setOpen(false);
  };
  return (
    <>
      <div
        aria-live="assertive"
        className="  z-10 fixed inset-0 h-[100px] flex items-end px-4 py-6 sm:items-start sm:p-6"
      >
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition
            show={show}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="  z-30 w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircleIcon
                      className="h-6 w-6 text-green-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm font-medium text-gray-900">
                      Successfully Voted!
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      You have successfully voted on this transaction.
                    </p>
                  </div>
                  <div className="ml-4 flex flex-shrink-0">
                    <button
                      type="button"
                      className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={() => {
                        setShow(false);
                      }}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll  bg-[#121212] py-6 shadow-xl">
                      <div className="px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-2xl font-semibold leading-6 text-white">
                            Transaction Detail
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="relative mt-2 flex-1 px-4 sm:px-6">
                        <div className="mt-6 border-t border-[#616161}">
                          <dl className="divide-y divide-[#616161]">
                            <TxInfoTile
                              title="Memo"
                              value={txDetail.transaction.memo || "None"}
                            />
                            <TxInfoTile
                              title="txID"
                              value={txDetail.transaction.txid}
                            />
                            <TxInfoTile
                              title="Transaction Amount"
                              value={txDetail.transaction.transaction_amount}
                              valueUnit="sats"
                            />
                            <TxInfoTile
                              title="Transaction Type"
                              value={capitalCase(
                                txDetail.transaction.transaction_kind
                              )}
                            />
                            <TxInfoTile
                              title="Transaction Block Height"
                              value={
                                txDetail.transaction.transaction_block_height ||
                                "N/A"
                              }
                            />
                            <TxInfoTile
                              title="Transaction Credit Address"
                              value={
                                txDetail.transaction.transaction_credit_address
                                  .address
                              }
                              valueUnit={
                                txDetail.transaction.transaction_credit_address
                                  .type === TX_CHAIN_TYPE.BITCOIN
                                  ? "btc"
                                  : "stx"
                              }
                            />
                            <TxInfoTile
                              title="Transaction Debit Address"
                              value={
                                txDetail.transaction.transaction_debit_address
                                  .address
                              }
                              valueUnit={
                                txDetail.transaction.transaction_debit_address
                                  .type === TX_CHAIN_TYPE.BITCOIN
                                  ? "btc"
                                  : "stx"
                              }
                            />
                            <TxInfoTile
                              title="Transaction Deadline Height"
                              value={
                                txDetail.transaction
                                  .transaction_deadline_block_height
                              }
                            />
                            <TxInfoTile
                              title="Transaction Fee's"
                              value={txDetail.transaction.transaction_fees}
                            />
                            <TxInfoTile
                              title="Transaction Originator Address"
                              value={
                                txDetail.transaction
                                  .transaction_originator_address.address
                              }
                              valueUnit={
                                txDetail.transaction
                                  .transaction_originator_address.type ===
                                TX_CHAIN_TYPE.BITCOIN
                                  ? "btc"
                                  : "stx"
                              }
                            />
                            <p className="text-white text-xl font-semibold pt-6 mb-4">
                              Signer Vote Status
                            </p>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                              <dt className="text-sm font-medium leading-6 text-white">
                                Vote Mechanism
                              </dt>
                              <dd className="mt-1 text-sm break-words leading-6 text-gray-400 sm:col-span-2 sm:mt-0">
                                {txDetail.vote_mechanism ===
                                VOTE_MECHANISM.auto ? (
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
                              </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                              <dt className="text-sm font-medium leading-6 text-white">
                                Vote Status
                              </dt>
                              <dd className="mt-1 text-sm break-words leading-6 text-gray-400 sm:col-span-2 sm:mt-0">
                                {txDetail.vote_choice}
                              </dd>
                            </div>
                            {txDetail.vote_mechanism ===
                              VOTE_MECHANISM.manual && (
                              <>
                                <p className="text-red-400 text-xl font-semibold pt-6 mb-4">
                                  Required Manual Vote Decision
                                </p>
                                <div className="w-full flex gap-x-8 py-4  items-center justify-center">
                                  <button
                                    onClick={() => handleVote(true)}
                                    type="button"
                                    className="relative inline-flex items-center gap-x-8 rounded-xl bg-secondary px-4 py-2 text-md font-semibold text-black shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                                  >
                                    Approved
                                  </button>
                                  <button
                                    onClick={() => handleVote(false)}
                                    type="button"
                                    className="relative inline-flex px-8 items-center gap-x-8 rounded-xl bg-secondary-light  py-2 text-md font-semibold text-black shadow-sm hover:bg-secondary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                                  >
                                    Reject
                                  </button>
                                </div>
                              </>
                            )}
                            <p className="text-white text-xl font-semibold pt-6 mb-4">
                              Vote Tally
                            </p>
                            <dl className="grid grid-cols-1 sm:grid-cols-2">
                              <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-white">
                                  Total Votes
                                </dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-400 sm:mt-2">
                                  {txDetail.vote_tally.current_consensus}
                                </dd>
                              </div>
                              <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-white">
                                  Target Consensus
                                </dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-400 sm:mt-2">
                                  {txDetail.vote_tally.target_consensus}
                                </dd>
                              </div>
                              <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-white">
                                  Total Signers
                                </dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-400 sm:mt-2">
                                  350
                                </dd>
                              </div>
                              <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900"></dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-400 sm:mt-2"></dd>
                              </div>
                            </dl>
                          </dl>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default TxDetail;
