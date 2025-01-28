import React, { useState, useEffect } from "react";
import axios from "axios";
import StockBox from "./StockBox";

const StockTracker = () => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchStockData = async () => {
    const apiKey = "UR33PAQBMD1D2NS7"; // Replace with your Alpha Vantage API key
    const stockSymbols = [
      { name: "Nifty50", symbol: "^NSEI" }, // Nifty50 Symbol for Alpha Vantage
      { name: "NVIDIA", symbol: "NVDA" },
      { name: "HDFC AMC", symbol: "HDFCAMC.NS" },
      { name: "Union Bank of India", symbol: "UNIONBANK.NS" },
      { name: "Hero MotoCorp", symbol: "HEROMOTOCO.NS" },
      { name: "BSE Ltd", symbol: "BSE.NS" },
    ];

    try {
      const results = await Promise.all(
        stockSymbols.map(async (stock) => {
          const response = await axios.get(
            "https://www.alphavantage.co/query",
            {
              params: {
                function: "TIME_SERIES_INTRADAY", // Fetch intraday data
                symbol: stock.symbol,
                interval: "5min", // Data at 5-minute intervals
                apikey: apiKey,
              },
            }
          );

          console.log(`Response for ${stock.name}:`, response.data); // Log the full response

          // Check if the response data exists and is in the expected format
          if (response.data["Time Series (5min)"]) {
            const timeSeries = response.data["Time Series (5min)"];
            const latestTime = Object.keys(timeSeries)[0];
            const latestData = timeSeries[latestTime];

            console.log(`Latest data for ${stock.name}:`, latestData); // Log latest data

            // Check if the necessary fields are available to calculate the change percentage
            const openPrice = parseFloat(latestData["1. open"]);
            const closePrice = parseFloat(latestData["4. close"]);

            // Only calculate the change percentage if both open and close prices are valid numbers
            if (!isNaN(openPrice) && !isNaN(closePrice)) {
              const changePercent = (
                ((closePrice - openPrice) / openPrice) *
                100
              ).toFixed(2);
              return {
                name: stock.name,
                price: closePrice.toFixed(2),
                change: `${changePercent}%`, // Calculate change percentage
              };
            } else {
              console.error(`Invalid prices for ${stock.name}:`, { openPrice, closePrice });
              return {
                name: stock.name,
                price: "N/A", // If prices are invalid or missing
                change: "N/A",
              };
            }
          } else {
            console.error(`No time series data found for ${stock.name}`);
            return {
              name: stock.name,
              price: "N/A",
              change: "N/A", // If no data found
            };
          }
        })
      );

      setStocks(results);
    } catch (error) {
      console.error("Error fetching stock data:", error);
      setStocks([ 
        { name: "Nifty50", price: "N/A", change: "N/A" },
        { name: "Reliance Industries", price: "N/A", change: "N/A" },
        { name: "HDFC AMC", price: "N/A", change: "N/A" },
        { name: "Union Bank of India", price: "N/A", change: "N/A" },
        { name: "Hero MotoCorp", price: "N/A", change: "N/A" },
        { name: "BSE Ltd", price: "N/A", change: "N/A" },
      ]); // Fallback mock data if error occurs
    } finally {
      setLoading(false); // Set loading to false after data is fetched
    }
  };

  useEffect(() => {
    fetchStockData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {loading ? (
        <p>Loading stocks...</p> // Show loading message if data is being fetched
      ) : (
        stocks.map((stock) => (
          <StockBox key={stock.name} name={stock.name} price={stock.price} change={stock.change} />
        ))
      )}
    </div>
  );
};

export default StockTracker;
