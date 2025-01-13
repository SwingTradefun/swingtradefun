"use client";

//leftsidebar
import { useState, useMemo, useEffect, useCallback } from "react";
import {
  ConnectionProvider,
  WalletProvider,
  useWallet,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
} from "@solana/wallet-adapter-react-ui";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl, Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";

import TradeLog from "./TradeLog";
import WalletManager from "./WalletManager";

import "@solana/wallet-adapter-react-ui/styles.css";

export default function App() {
  const endpoint = useMemo(() => clusterApiUrl("mainnet-beta"), []);
  const wallets = useMemo(
    () => [new PhantomWalletAdapter(), new SolflareWalletAdapter()],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <LeftSidebar />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

function LeftSidebar() {
  const { publicKey, disconnect, connected } = useWallet();
  const [balance, setBalance] = useState("0.00");
  const [holdings, setHoldings] = useState<{ token: string; amount: string }[]>(
    []
  );

  const trades = [
    { action: "Buy", token: "SOL", amount: "5", price: "20" },
    { action: "Sell", token: "USDC", amount: "100", price: "1" },
    { action: "Buy", token: "SOL", amount: "10", price: "22" },
  ];

  //const endpoint = useMemo(() => clusterApiUrl("mainnet-beta"), []);
  //const endpoint = useMemo(() => clusterApiUrl("testnet"), []);
  const endpoint = useMemo(() => clusterApiUrl("devnet"), []);
  const connection = useMemo(() => new Connection(endpoint), [endpoint]);

  const connectWallet = useCallback(async () => {
    if (!connected || !publicKey) {
      console.log("Phantom wallet not connected or detected.");
      return;
    }

    try {
      const walletAddress = publicKey.toBase58();
      console.log("Wallet detected. Address:", walletAddress);

      // Fetch wallet balance
      const lamports = await connection.getBalance(publicKey);
      const solBalance = (lamports / LAMPORTS_PER_SOL).toFixed(2);

      setBalance(solBalance);

      // Placeholder for holdings
      setHoldings([
        { token: "SOL", amount: solBalance },
        // Additional token holdings can be fetched from a Solana token program if needed
      ]);
    } catch (err) {
      console.error("Error fetching wallet data:", err);
    }
  }, [connected, publicKey, connection]);

  useEffect(() => {
    if (connected && publicKey) {
      connectWallet();
    }
  }, [connected, publicKey, connectWallet]);

  const disconnectWallet = () => {
    disconnect();
    setBalance("0.00");
    setHoldings([]);
  };

  return (
    <div className="flex flex-col h-full w-full">
      <TradeLog trades={trades} />
      <WalletManager
        connected={connected}
        publicKey={publicKey?.toBase58() || null}
        balance={balance}
        holdings={holdings}
        onDisconnect={disconnectWallet}
      />
    </div>
  );
}
