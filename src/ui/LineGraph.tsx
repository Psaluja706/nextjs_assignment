"use client";
import React from "react";
import { ResponsiveLine } from "@nivo/line";

export const data = [
  {
    id: "line1",
    color: "hsl(43, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 197,
      },
      {
        x: "helicopter",
        y: 108,
      },
      {
        x: "boat",
        y: 99,
      },
      {
        x: "train",
        y: 22,
      },
      {
        x: "subway",
        y: 154,
      },
      {
        x: "bus",
        y: 52,
      },
      {
        x: "car",
        y: 142,
      },
      {
        x: "moto",
        y: 107,
      },
      {
        x: "bicycle",
        y: 202,
      },
      {
        x: "horse",
        y: 38,
      },
      {
        x: "skateboard",
        y: 90,
      },
      {
        x: "others",
        y: 290,
      },
    ],
  },
];

const LineGraph = () => {

  return (
    // <ResponsiveLine
    //   theme={{
    //     axis: {
    //       domain: {
    //         line: {
    //           stroke: "#ADA7A7",
    //           strokeWidth: 1,
    //           strokeDasharray: 4,
    //         },
    //       },
    //     },
    //   }}
    //   curve="linear"
    //   enableGridX={false}
    //   enablePoints={true}
    //   enableGridY={false}
    //   enableSlices="x"
    //   colors={["#2ED47A", "#21CBE2"]}
    //   data={[
    //     {
    //       id: "Target Rate",
    //       //   data: Object.keys(trendValues?.trends[selectedDay])
    //       //     ?.sort((a, b) => (moment(a).isAfter(moment(b)) ? 1 : -1))
    //       //     ?.map((item, index) => {
    //       //       return {
    //       //         x: moment(item).valueOf(),
    //       //         y: Number(
    //       //           trendValues?.trends[selectedDay][item].targetRate
    //       //         )?.toFixed(0),
    //       //       };
    //       //     }),
    //       data: [
    //         { x: 10, y: 10 },
    //         { x: 20, y: 20 },
    //       ],
    //     },
    //     {
    //       id: "Cost",
    //       data: [
    //         { x: 40, y: 40 },
    //         { x: 50, y: 50 },
    //       ],
    //     },
    //   ]}
    //   margin={{ top: 20, right: 50, bottom: 80, left: 50 }}
    //   axisTop={null}
    //   axisRight={null}
    //   useMesh={true}
    // //   axisBottom={{
    // //     format: function (value) {
    // //       return moment(value).format("DD MMM");
    // //     },
    // //   }}
    // />
    <div className="h-72 absolute top-0 w-full">
      <ResponsiveLine
        theme={{
          axis: {
            domain: {
              line: {
                stroke: "#ADA7A7",
                strokeWidth: 1,
                strokeDasharray: 4,
              },
            },
          },
        }}
        curve="linear"
        enableGridX={false}
        enablePoints={true}
        enableGridY={false}
        enableSlices="x"
        colors={["#2ED47A", "#21CBE2"]}
        data={data}
        margin={{ top: 20, right: 50, bottom: 80, left: 50 }}
        axisTop={null}
        axisRight={null}
        useMesh={true}
        // axisBottom={{
        //   format: function (value) {
        //     return moment(value).format("DD MMM");
        //   },
        // }}
      />
    </div>
  );
};

export default LineGraph;
