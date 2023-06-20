import type { NextPage } from "next";

import Head from "next/head";
import styles from "../src/styles/Home.module.css";
import { classNames } from "../src/const/util";
import { useState } from "react";
import TxDetail from "../src/comp/TxDetail";
import HomeDashboard from "../src/comp/HomeDashboard";

export const people = [
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
      </main>
    </div>
  );
};

export default Home;
