import { useEffect } from 'react';
import Chart from 'chart.js';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';

export default function ChartBar({ data }) {
  useEffect(() => {
    const RenderBar = () => {
      let config = {
        type: "bar",
        data: {
          labels: data.ArrDay,
          datasets: [
            {
              label: "Docs",
              backgroundColor: "#03a9f4",
              borderColor: "#03a9f4",
              data: data.DocArr,
              fill: false,
              barThickness: 8,
            },
            {
              label: "Arts",
              fill: false,
              backgroundColor: "#f44336",
              borderColor: "#f44336",
              data: data.ArtArr,
              barThickness: 8,
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          title: {
            display: false,
            text: "Orders Chart",
          },
          tooltips: {
            mode: "index",
            intersect: false,
          },
          hover: {
            mode: "nearest",
            intersect: true,
          },
          legend: {
            labels: {
              fontColor: "rgba(17,17,17,.7)",
            },
            align: "end",
            position: "bottom",
          },
          scales: {
            xAxes: [
              {
                display: false,
                scaleLabel: {
                  display: true,
                  labelString: "Month",
                },
                gridLines: {
                  borderDash: [2],
                  borderDashOffset: [2],
                  color: "rgba(33, 37, 41, 0.3)",
                  zeroLineColor: "rgba(33, 37, 41, 0.3)",
                  zeroLineBorderDash: [2],
                  zeroLineBorderDashOffset: [2],
                },
              },
            ],
            yAxes: [
              {
                display: true,
                scaleLabel: {
                  display: false,
                  labelString: "Value",
                },
                gridLines: {
                  borderDash: [2],
                  drawBorder: false,
                  borderDashOffset: [2],
                  color: "rgba(33, 37, 41, 0.2)",
                  zeroLineColor: "rgba(33, 37, 41, 0.15)",
                  zeroLineBorderDash: [2],
                  zeroLineBorderDashOffset: [2],
                },
              },
            ],
          },
        },
      };
      let ctx = document.getElementById("bar-chart").getContext("2d");
      window.myBar = new Chart(ctx, config);
    };
    RenderBar();
    if (data) {
      RenderBar();
    }
  }, [data]);
  return (
    <Card>
      <CardHeader color="pink" contentPosition="left">
        <h6 className="uppercase text-gray-200 text-xs font-medium">
          Overview
        </h6>
        <h2 className="text-white text-2xl">Upload Value</h2>
      </CardHeader>
      <CardBody>
        <>
          <div className="relative h-96">
            <canvas id="bar-chart"></canvas>
          </div>
        </>
      </CardBody>
    </Card>
  );
}
