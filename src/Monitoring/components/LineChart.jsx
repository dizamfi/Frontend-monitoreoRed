import { useTheme } from "@emotion/react";
import { tonalidad } from "../../theme/theme";
import { ResponsiveLine } from "@nivo/line";
import { Data2 } from "../../data/data";


export const LineChart = ({ data, curve, legendBottom, legendLeft="" }) => {
  const theme = useTheme();
  const colors = tonalidad(theme.palette.mode);

  return (
    <ResponsiveLine
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.white[100],
            },
          },
          legend: {
            text: {
              fill: colors.white[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.white[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.white[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.white[100],
          },
        },
        tooltip: {
          container: {
            color: colors.primary[500],
          },
        },
      }}
      colors= {{ scheme: 'set3' }} 
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve={curve}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: legendBottom,
        legendOffset: 45,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickValues: 5,
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: legendLeft,   
        legendOffset: -70,
        legendPosition: "middle",
      }}
      enableGridX={false}
      enableGridY={false}
      lineWidth={1}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 118,
          translateY: 10,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};
