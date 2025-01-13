import React from "react";

const TradeLog = ({ trades }: { trades: { action: string; token: string; amount: string; price: string }[] }) => {
  return (
    <div className="flex flex-col flex-1 p-4 overflow-hidden">
      {/* Sticky Header */}
      <div className="sticky top-0 bg-[#202123] z-10 text-center py-2">
        <h3 className="text-lg font-bold">Trading Log</h3>
      </div>
      {/* Scrollable Area for Trades */}
      <div className="flex-1 overflow-y-auto mt-2">
        <div className="space-y-2">
          {trades.map((trade, index) => (
            <TradeItem
              key={index}
              action={trade.action}
              token={trade.token}
              amount={trade.amount}
              price={trade.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const TradeItem = ({
  action,
  token,
  amount,
  price,
}: {
  action: string;
  token: string;
  amount: string;
  price: string;
}) => {
  return (
    <div className="flex justify-between items-center rounded-md px-3 py-2 bg-[#202123] hover:bg-gray-700/50">
      <div className="flex items-center space-x-2 truncate">
        {/* Action Indicator */}
        <span
          className={`inline-block w-2 h-2 rounded-full ${
            action === "Buy" ? "bg-green-500" : "bg-red-500"
          }`}
        ></span>
        <span className="text-sm font-medium truncate">{`${action} ${token} ${amount}`}</span>
      </div>
      <span className="text-xs text-gray-400 truncate">{`@ $${price}`}</span>
    </div>
  );
};

export default TradeLog;
