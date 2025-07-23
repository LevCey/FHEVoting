# FHEVoting Smart Contract

This is a **confidential voting smart contract** built using Zama's FHEVM for the Zama Developer Program Level 3 – Builder task.

# FHEVoting

A confidential voting smart contract built with FHEVM and deployed on Sepolia testnet.

## 🧠 Description
This contract allows users to cast confidential votes (yes/no) using Fully Homomorphic Encryption (FHE) on-chain with Zama’s FHEVM.

## 🚀 Deployment Info
- **Network:** Sepolia Testnet
- **Contract Address:** `0xE5769d075c7a7621E3a481ABbBda20Ff469e841d`

## 🛠 Tech Stack
- Solidity 0.8.28
- Hardhat
- FHEVM
- hardhat-deploy
- TypeScript

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


