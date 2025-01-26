import React from "react";

const StockBox = ({ name, change }) => {
  const isPositive = change > 0;

  return (
    <div
      className={`p-4 rounded-2xl shadow-md flex items-center justify-between w-64 ${
        isPositive ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
      }`}
    >
      <div>
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-sm">Today</p>
      </div>
      <div className="text-right">
        <p
          className={`text-2xl font-bold ${
            isPositive ? "text-green-600" : "text-red-600"
          }`}
        >
          {isPositive ? "+" : ""}
          {change}%
        </p>
      </div>
    </div>
  );
};

export default StockBox;
