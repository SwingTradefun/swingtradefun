![image](https://github.com/user-attachments/assets/eccbd591-698b-4235-94df-78f364059c7a)

# Solana AI Swing Trading Agent (MVP)

## Overview
The **Solana AI Swing Trading Agent** is an automated trading system in its **MVP (Minimum Viable Product)** phase. It is designed to perform **swing trades** exclusively within the **Solana blockchain ecosystem**, leveraging AI to analyze trends and execute trades based on user-provided prompts. This work-in-progress project aims to offer a streamlined trading experience while focusing on rapid iteration and feature development.

## Key Features (MVP)
- **Solana-Exclusive Swing Trading**: Designed for SOL and SPL token trading.
- **User-Friendly Interface**: Accepts natural language prompts such as "Buy SOL if it drops to $20 and sell at $24."
- **Basic Automation**: Executes trades automatically based on predefined conditions.
- **Simple Analytics**: Provides basic trade performance feedback, including profits and losses.
- **Decentralized Exchange Integration**: Interacts with Solana DEXs via Jupiter API.

## Technologies Used
- **OpenAI API**: Translates user prompts into actionable trade logic.
- **Jupiter API v2**: Handles trade execution and price data retrieval.
- **Next.js**: Creates the MVP interface for user interaction.
- **Tailwind CSS**: Provides clean and modern styling.
- **TypeScript**: Ensures type safety and better code maintainability.
- **Solana SDK**: Manages blockchain transactions and interactions.
- **Node.js**: Handles backend logic and API integration.

## Current Limitations
- **MVP Scope**: The current version focuses on basic swing trading functionality and lacks advanced features like complex risk management or multi-token strategies.
- **Single Wallet Support**: Only supports one wallet for trading.
- **Limited DEX Options**: Currently integrated with only a single Solana DEX (via Jupiter API).
