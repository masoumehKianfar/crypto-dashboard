import { Area, AreaChart, ResponsiveContainer } from "recharts";

interface ResponsiveContainerchartProps {
  data: number[];
  positive: boolean;
}
const ResponsiveContainerchartComponent = ({
  data,
  positive,
}: ResponsiveContainerchartProps) => {
  const chartData = data.map((value, index) => ({ index, value }));
  const isPosotiveColor = positive ? "#22c55e" : "#f43f5e";

  return (
    <div className="h-10 w-28">
      <ResponsiveContainer>
        <AreaChart data={chartData}>
          <Area
            type="monotone"
            dataKey="value"
            stroke={isPosotiveColor}
            fill={isPosotiveColor}
            fillOpacity={0.18}
            strokeWidth={1.5}
            dot={false}
            isAnimationActive={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ResponsiveContainerchartComponent;
