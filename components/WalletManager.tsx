import React from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const WalletManager = ({
  connected,
  publicKey,
  balance,
  holdings,
  onDisconnect,
}: {
  connected: boolean;
  publicKey: string | null;
  balance: string;
  holdings: { token: string; amount: string }[];
  onDisconnect: () => void;
}) => {
  return (
    <div className="p-4 border-t border-gray-800 flex justify-center">
      {connected ? (
        <div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">
              Wallet: <strong>{shortenAddress(publicKey || "")}</strong>
            </span>
            <Button
              variant="ghost"
              size="sm"
              className="text-xs"
              onClick={onDisconnect}
            >
              Logout
            </Button>
          </div>
          <div className="mt-2">
            <p className="text-sm">Balance: {balance} SOL</p>
            <ScrollArea className="mt-2 max-h-24 overflow-y-auto pr-2">
              <div className="space-y-1">
                {holdings.map((holding) => (
                  <div
                    key={holding.token}
                    className="flex justify-between text-sm text-gray-300"
                  >
                    <span className="truncate">{holding.token}</span>
                    <span className="ml-4">{holding.amount}</span>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      ) : (
        <WalletMultiButton
          className="wallet-adapter-button-trigger bg-white text-black font-medium border border-gray-400 rounded-md py-2 px-4 hover:bg-gray-100"
        />
      )}
    </div>
  );
};

function shortenAddress(address: string) {
  return `${address.slice(0, 4)}...${address.slice(-4)}`;
}

export default WalletManager;
