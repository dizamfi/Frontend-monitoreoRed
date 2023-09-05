import { ResponsivePie } from "@nivo/pie";
import { tonalidad } from "../../theme/theme";
import { useTheme } from "@mui/material";
import { PieData } from "../../data/data";




export const PieChart = ({ data }) => {

  const theme = useTheme();
  const colors = tonalidad(theme.palette.mode);

  return (
<ResponsivePie
        data={data}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: colors.yellow[100]
              }
            },
            legend: {
              text: {
                fill: colors.yellow[100]
              }
            },
            ticks: {
              line: {
                stroke: colors.yellow[100],
                strokeWidth: 1
              },
              text: {
                fill: colors.yellow[100]
              }
            }
          },
        
          legends: {
            text: {
              fill: colors.yellow[100]
            },
          }
        }}
        margin={{ top: 30, right: 70, bottom: 60, left: 70}}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'category10' }}
        borderWidth={2}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={11}
        arcLinkLabelsTextColor={{ from: 'color', modifiers: [] }}
        arcLinkLabelsOffset={-2}
        arcLinkLabelsDiagonalLength={15}
        arcLinkLabelsStraightLength={14}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color', modifiers: [] }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'c'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 10,
                translateY: 60,
                itemsSpacing: 0,
                itemWidth: 77,
                itemHeight: 58,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 15,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
  );
};
