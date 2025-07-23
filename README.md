# FHEVoting Smart Contract

This is a **confidential voting smart contract** built using Zama's FHEVM for the Zama Developer Program Level 3 – Builder task.

## Features
- Fully confidential voting using encrypted boolean values (FHE).
- Prevents double voting using `hasVoted` mapping.
- Tally is encrypted and can be selectively revealed with permission.
- Deployed on Sepolia Testnet.

## Contract
- Name: `FHEVoting`
- Network: Sepolia
- Address: `0x...` *(replace with deployed address)*

## Tech Stack
- Hardhat + TypeScript
- Solidity ^0.8.24
- Zama FHEVM SDK
- `@fhevm/solidity`, `@fhevm/hardhat-plugin`


