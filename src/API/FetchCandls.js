import React from "react";
import ReactApexChart from "react-apexcharts";
import axios from "axios";

export default function ApexChart({crypto, period}) {
    const [candles, setCandles] = React.useState({});

    React.useEffect(() => {
      window.localStorage.setItem("Candles", candles);
    }, [candles]);

    async function fetchData() {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/${crypto}-${period}-candles`
        );
        setCandles(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    // it called first only once because of the [],
    // Then it called every 5 seconds
    React.useEffect(() => {
      fetchData();
      const intervalId = setInterval(() => {
        fetchData();
      }, 5000);

      return () => {
        clearInterval(intervalId);
      };
    }, [crypto, period]);
    
  const series = [
    {
      name: "candle",
      data: Object.values(candles).map((el) => ({
        x: new Date(el[0]),
        y: el.slice(1, 5),
      })),
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "candlestick",
    },
    title: {
      text: `${crypto} / USD`,
      align: "left",
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: "#FF0000",
          downward: "#00B746",
        },
      },
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="candlestick"
        height={'95%'}
        width={'100%'}
      />
    </div>
  );
};

