import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import styles from "../Charts/Chart.module.css";

// Fetch API Data
import { fetchDailyData } from "../../api";

const Chart = () => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchAPI();
  });

  // const lineChart = {
  //   <Line />
  // }

  return <div></div>;
};

export default Chart;
