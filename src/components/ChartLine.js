import Chart from "chart.js";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import { api } from "services/api.js";
import { useEffect, useState } from "react";
const myApi = new api();

export default function ChartLine() {
  const [labels, setlabels] = useState([
    "16/3/2023",
    "17/3/2023",
    "18/3/2023",
    "19/3/2023",
    "20/3/2023",
    "21/3/2023",
    "22/3/2023",
  ]);
  const [dataDoc, setDataDoc] = useState([2, 24, 6, 8, 44, 12, 36]);
  const [dataArt, setDataArt] = useState([1, 3, 5, 7, 9, 11, 19]);

  const GetApi = async () => {
    try {
      const result = await myApi.FUNC_GET_CHART();
      console.log(result);
      if (result.data.status == 200) {
        setDataDoc(result.data.data.DocArr);
        setDataArt(result.data.data.ArtArr);
        setlabels(result.data.data.ArrDay);
      }
    } catch (error) {}
  };
  useEffect(() => {
    GetApi();
    var config = {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Docs",
            backgroundColor: "#03a9f4",
            borderColor: "#03a9f4",
            data: dataDoc,
            fill: false,
          },
          {
            label: "Arts",
            fill: false,
            backgroundColor: "#ff9800",
            borderColor: "#ff9800",
            data: dataArt,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Sales Charts",
          fontColor: "white",
        },
        legend: {
          labels: {
            fontColor: "black",
          },
          align: "end",
          position: "bottom",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "rgba(17,17,17,.7)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Month",
                fontColor: "white",
              },
              gridLines: {
                display: false,
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(0, 0, 0, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "rgba(17,17,17,.7)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
                fontColor: "white",
              },
              gridLines: {
                borderDash: [3],
                borderDashOffset: [3],
                drawBorder: false,
                color: "rgba(17, 17, 17, 0.15)",
                zeroLineColor: "rgba(33, 37, 41, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    var ctx = document.getElementById("line-chart").getContext("2d");
    window.myLine = new Chart(ctx, config);
  }, []);


  return (
    <Card>
      <CardHeader color="orange" contentPosition="left">
        <h6 className="uppercase text-gray-200 text-xs font-medium">
          Overview
        </h6>
        <h2 className="text-white text-2xl">Sales value</h2>
      </CardHeader>
      <CardBody>
        <div className="relative h-96">
          <canvas id="line-chart"></canvas>
        </div>
      </CardBody>
    </Card>
  );
}
