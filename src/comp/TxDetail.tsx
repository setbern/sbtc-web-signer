import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { PaperClipIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { SIGNER_TX_DATA } from "../atoms/atomTypes";

type txDetail = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: any;
  txDetail: SIGNER_TX_DATA | null;
};

const TxDetail = ({ setOpen, open, txDetail }: txDetail) => {
  if (!txDetail) {
    return null;
  }
  return (
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
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                          Transaction Info
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="relative mt-2 flex-1 px-4 sm:px-6">
                      <div className="mt-6 border-t border-gray-100">
                        <dl className="divide-y divide-gray-100">
                          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">
                              ID
                            </dt>
                            <dd className="mt-1 text-sm break-words leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              2165abd14d27cf7f0f08d2569db307bc29f50175bfa8c5a1915807a942047831
                            </dd>
                          </div>
                          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">
                              Type
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              Deposit
                            </dd>
                          </div>
                          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">
                              Stage
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              Reveal
                            </dd>
                          </div>

                          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">
                              Sender
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 break-words sm:col-span-2 sm:mt-0">
                              bc1qv4kqe7d3hdt4w3a7xpwk772zckzjnf0su9ldq5
                            </dd>
                          </div>
                          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">
                              Sats
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              120,000
                            </dd>
                          </div>
                          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">
                              Status
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                Approved
                              </span>
                            </dd>
                          </div>
                          <dl className="grid grid-cols-1 sm:grid-cols-2">
                            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                              <dt className="text-sm font-medium leading-6 text-gray-900">
                                Total Votes
                              </dt>
                              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
                                400
                              </dd>
                            </div>
                            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                              <dt className="text-sm font-medium leading-6 text-gray-900">
                                Approved Votes
                              </dt>
                              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
                                360
                              </dd>
                            </div>
                            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                              <dt className="text-sm font-medium leading-6 text-gray-900">
                                Refused Votes
                              </dt>
                              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
                                40
                              </dd>
                            </div>
                            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                              <dt className="text-sm font-medium leading-6 text-gray-900">
                                No Votes
                              </dt>
                              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
                                20
                              </dd>
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
  );
};

export default TxDetail;
