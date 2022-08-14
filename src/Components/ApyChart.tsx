import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import useSWR from "swr";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
// import { useEffect } from "react";
import solendPlusApi from "../axios-instances/solendPlusApi";
import { IRawApyDataPoint, IApyChartDataset } from "../interfaces";

interface IApyChart {
  symbol: string;
  from: string;
  to: string;
  interval: number;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const ApyChart = ({ symbol, from, to, interval }: IApyChart) => {
  const [apyHistory, setApyHistory] = useState<IRawApyDataPoint[]>([]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "APY Dashboard",
      },
    },
  };

  const { supplyData, borrowData, labels } = useMemo(() => {
    const initialValue: IApyChartDataset = {
      supplyData: [],
      borrowData: [],
      labels: [],
    };

    if (_.isNil(apyHistory) || _.isEmpty(apyHistory)) {
      return initialValue;
    }

    return apyHistory.reduce((acc, current) => {
      const dataPointTimeStamp = new Date(current.timestamp);
      const month = dataPointTimeStamp.getMonth();
      const day = dataPointTimeStamp.getDate();
      const hour = dataPointTimeStamp.getHours();
      const minute = dataPointTimeStamp.getMinutes();
      acc.supplyData.push(current.data.supplyAPY * 100);
      acc.borrowData.push(current.data.borrowApy * 100);
      acc.labels.push(`${month + 1}/${day} - ${hour}:${minute}`);

      return acc;
    }, initialValue);
  }, [apyHistory]);

  const chartData = {
    labels,
    datasets: [
      {
        fill: true,
        label: `${symbol} supply apy history`,
        data: supplyData,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        fill: true,
        label: `${symbol} borrow apy history`,
        data: borrowData,
        borderColor: "rgb(252, 95, 95)",
        backgroundColor: "rgba(252, 95, 95, 0.5)",
      },
    ],
  };

  const apyHistoryFetcher = async (...args: any[]) => {
    try {
      const { data } = await solendPlusApi.get(
        `apy/${args[0]}?from=${args[1]}&to=${args[2]}&interval=${args[3]}`
      );

      console.log(
        "🚀 ~ file: QuestionsTab.tsx ~ line 19 ~ courseQuestionsFetcher ~ data",
        data
      );

      return data;
    } catch (error) {
      console.error(`Failed at apy/dashboard/ApyChart. Error: ${error}`);

      throw error;
    }
  };

  const { data, error } = useSWR(
    [symbol, from, to, interval],
    apyHistoryFetcher
  );

  useEffect(() => {
    setApyHistory(data);
  }, [data]);

  return <Line options={options} data={chartData} />;
};

export default ApyChart;
