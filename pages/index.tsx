import type { NextPage } from "next";

import Head from "next/head";
import styles from "../src/styles/Home.module.css";
import { classNames } from "../src/const/util";
import { useState } from "react";
import TxDetail from "../src/comp/TxDetail";
import HomeDashboard from "../src/comp/HomeDashboard";

const people = [
  {
    name: "Deposit",
    title: "bc1qv4kqe7d3hdt4w3a7xpwk772zckzjnf0su9ldq5",
    stage: "Reveal",

    role: "#792001",
    sats: "199946015",
  },
  {
    name: "Deposit",
    title: "bc1qv4kqe7d3hdt4w3a7xpwk772zckzjnf0su9ldq5",
    stage: "Reveal",

    role: "#792001",
    sats: "199946015",
  },
  {
    name: "Deposit",
    title: "bc1qv4kqe7d3hdt4w3a7xpwk772zckzjnf0su9ldq5",
    stage: "Reveal",

    role: "#792001",
    sats: "199946015",
  },
  {
    name: "Deposit",
    title: "bc1qv4kqe7d3hdt4w3a7xpwk772zckzjnf0su9ldq5",
    stage: "Reveal",

    role: "#792001",
    sats: "199946015",
  },
  {
    name: "Deposit",
    title: "bc1qv4kqe7d3hdt4w3a7xpwk772zckzjnf0su9ldq5",
    stage: "Reveal",

    role: "#792001",
    sats: "199946015",
  },
  {
    name: "Deposit",
    title: "bc1qv4kqe7d3hdt4w3a7xpwk772zckzjnf0su9ldq5",
    stage: "Reveal",

    role: "#792001",
    sats: "199946015",
  },
  {
    name: "Deposit",
    title: "bc1qv4kqe7d3hdt4w3a7xpwk772zckzjnf0su9ldq5",
    stage: "Reveal",

    role: "#792001",
    sats: "199946015",
  },
];

const tabs = [
  { name: "All", href: "#", current: true },
  { name: "Deposit", href: "#", current: false },
  { name: "Withdrawal", href: "#", current: false },
  { name: "Handoff", href: "#", current: false },
];

const Home: NextPage = () => {
  return (
    <div
      style={{
        background: "rgba(0, 0, 0, 0.9)",
      }}
      className=""
    >
      <Head>
        <title>sBTC Signer</title>
        <meta name="description" content="sBTC Web Signer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header
        style={{
          background: "rgba(0, 0, 0, 0.9)",
        }}
      ></header>

      <main
        style={{
          background: "rgba(0, 0, 0, 0.9)",
        }}
        className=""
      >
        <HomeDashboard />
        <div className="mx-auto max-w-7xl  pb-12 px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="sm:flex sm:items-baseline">
              <h1 className="text-base  mt-8  font-semibold leading-6 text-gray-900">
                Transactions
              </h1>
              <div className="mt-4 sm:ml-10 sm:mt-0">
                <nav className="-mb-px flex space-x-8">
                  {tabs.map((tab) => (
                    <a
                      key={tab.name}
                      href={tab.href}
                      className={classNames(
                        tab.current
                          ? "border-secondary text-secondary"
                          : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                        "whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium"
                      )}
                      aria-current={tab.current ? "page" : undefined}
                    >
                      {tab.name}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
          <div className=" mt-4 flow-root  px-4">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 "
                      >
                        Type
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                      >
                        Stage
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Sender
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Sats
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Block #
                      </th>
                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                      >
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {people.map((person) => (
                      <tr key={person.name}>
                        <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm font-medium text-gray-900">
                          {person.name}
                        </td>
                        <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                          <div className="font-medium text-gray-900">
                            {person.stage}
                          </div>
                        </td>

                        <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                          <div className="text-gray-900">{person.title}</div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                          <div className="text-gray-900">{person.sats}</div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                          <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                            Approved
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                          {person.role}
                        </td>
                        {/* <td
                          onClick={() => setOpen(true)}
                          className="relative cursor-pointer whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0"
                        >
                          <a className="text-secondary hover:text-secondary-dark">
                            View<span className="sr-only">, {person.name}</span>
                          </a>
                        </td> */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
