import React, { useState, useEffect } from "react";
import axios from "axios";
import StockBox from "./StockBox";

const StockTracker = () => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchStockData = async () => {
    const apiKey = "TYAQBNQUPHULTH5C"; // Replace with your Alpha Vantage API key
    const stockSymbols = [
      { name: "Nifty50", symbol: "^NSEI" }, // Nifty50 Symbol for Alpha Vantage
      { name: "Oracle Financial Services", symbol: "OFSS.NS" },
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

          // Log the response to see what we get from Alpha Vantage
          console.log(`Response for ${stock.name}:`, response.data);

          // Check if the response data exists and is in the expected format
          if (response.data["Time Series (5min)"]) {
            const timeSeries = response.data["Time Series (5min)"];
            const latestTime = Object.keys(timeSeries)[0];
            const latestData = timeSeries[latestTime];

            // Log the time series data for debugging
            console.log(`Time series data for ${stock.name}:`, latestData);

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
                change: changePercent, // Calculate change percentage
              };
            } else {
              return {
                name: stock.name,
                change: "N/A", // If prices are invalid or missing
              };
            }
          } else {
            return {
              name: stock.name,
              change: "N/A", // If no data found
            };
          }
        })
      );

      setStocks(results);
    } catch (error) {
      console.error("Error fetching stock data:", error);
      setStocks([
        { name: "Nifty50", change: "N/A" },
        { name: "Oracle Financial Services", change: "N/A" },
        { name: "HDFC AMC", change: "N/A" },
        { name: "Union Bank of India", change: "N/A" },
        { name: "Hero MotoCorp", change: "N/A" },
        { name: "BSE Ltd", change: "N/A" },
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
          <StockBox key={stock.name} name={stock.name} change={stock.change} />
        ))
      )}
    </div>
  );
};

export default StockTracker;
