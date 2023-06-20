import { atom } from "jotai";
import { SIGNER_TX_DATA } from "./atomTypes";

export const temp = 1;

export const signerTxDataAtom = atom<SIGNER_TX_DATA[]>([]);
